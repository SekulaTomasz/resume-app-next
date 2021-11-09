import { useEffect, useState } from "react";

const useDownloadResume = (data) => {

    const [isDownloaded, setDownloadState] = useState(false);
    const [file, setFile] = useState(false);
    const [error, setError] = useState(null);
    const [fileMetadata, setFileMetadata] = useState(null);
    

    const downloadFile = async(file) => {
        const { url, mime, name, ext } = file;

        const path = `${process.env.NEXT_PUBLIC_STRAPI_API_BASE_URL}${url}`
        fetch(path, {headers: {
            "Content-Type": mime
        }})
        .then((resp) => {
            setFileMetadata({
                name,
                ext,
                url,
                mime
            })
            return resp.blob();
        })
        .then((blob) => {
            setFile(blob);
        })
        .catch((ex) => setError(ex));
    }

    useEffect(() => {
        if(!data) return;
        const file = data.media[0];
        if(!file) return;
        downloadFile(file);
    },[data]);

    useEffect(() => {
        if(file) setDownloadState((prev) => !prev);
    },[file])

    return { isDownloaded, file, fileMetadata }

}

export default useDownloadResume;