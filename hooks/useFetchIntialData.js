import { useEffect, useState } from "react";

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_KEY}`,
};

const cacheName = "cms-data";

const useFetchIntialData = (requestPath) => {
  const [isLoaded, setLoaded] = useState(false);
  const [forceRefresh, setForceRefresh] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setInitialData();
    const url = `${process.env.NEXT_PUBLIC_STRAPI_API_BASE_URL}${requestPath}`;

    const clearCache = async () => {
      return await caches.open(cacheName).then((cache) => {
        cache.delete(url);
      });
    };

    const getFromCache = async () => {
      return await caches.open(cacheName).then((cache) => {
        cache
          .add(new Request(url, { headers }))
          .then(() => cache.match(url))
          .then((response) => response.json())
          .then((json) => setData(json))
          .then(() => setLoaded(true))
          .catch((ex) => setError(ex))
      });
    };

    const fetchFromApi = () => {
      fetch(url, {headers})
        .then((resp) => resp.json())
        .then((data) => setData(data))
        .then(() => setLoaded(true))
        .catch((ex) => setError(ex))
    }

    if('caches' in window){
      if (forceRefresh) {
        clearCache().then(() => getFromCache());
      } else {
        getFromCache();
      }
    } else {
      fetchFromApi();
    }
  };

  const setInitialData = () => {
    setLoaded(false);
    setData(null);
    setError(null);
    setForceRefresh(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (!forceRefresh) return;
    fetchData();
  }, [forceRefresh]);

  return { isLoaded, setForceRefresh, data, error };
};

export default useFetchIntialData;
