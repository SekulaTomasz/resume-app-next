import { useEffect, useState, useCallback } from "react";

let isRevert = false;
let intervalId = null;
const useTypingText = (
  text,
  typingSpeed = 1000,
  loop = true,
  delayTime = 1000
) => {
  const [word, setWord] = useState("|");
  const [counter, setCounter] = useState(-1);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const timer = useCallback(() => {
    setCounter((prev) => (isRevert ? prev - 1 : prev + 1));
  }, []);

  const delay = (delayTime, forceTrigger) =>
    new Promise((resolve) => {
      if(forceTrigger) resolve();
      return setTimeout(resolve, delayTime);
    });

  useEffect(() => {
    const promise = setIntervalWithDelay();
    promise.then(() => {
      intervalId = setInterval(timer, typingSpeed);
    });
    return () => {
      Promise.resolve(promise);
      clearInterval(intervalId);
    };
  }, []);

  const handleTyping = () => {
    if (!text[currentWordIndex]) return;

    const shoudlSetNewWord = isRevert && counter < 0;
    if (shoudlSetNewWord) {
      setNewWordToTyping();
      return;
    }

    const isEndOfWord = counter === text[currentWordIndex].length;
    if (isEndOfWord) {
      isRevert = true;
    }

    if (isRevert) {
      setWord((prev) => `${prev.substring(0, counter)}|`);
    } else {
      if (!text[currentWordIndex][counter]) return;
      setWord(
        (prev) => `${prev.replace("|", "")}${text[currentWordIndex][counter]}|`
      );
    }
  };

  const setNewWordToTyping = () => {
    isRevert = false;
    setCurrentWordIndex((prev) => {
      if (prev + 1 >= text.length && loop) return 0;
      else if (prev + 1 >= text.length && !loop) clearInterval(timer);
      return prev + 1;
    });
  };

  const setIntervalWithDelay = () => {
    if (intervalId) clearInterval(intervalId);
    return delay(delayTime)
  };

  useEffect(() => {
    let promise = null;
    if (!intervalId) return;
    const isEndOfWord = counter === text[currentWordIndex].length;
    if (isEndOfWord) {
      promise = setIntervalWithDelay();
      promise.then(() => {
        intervalId = setInterval(timer, typingSpeed);
      });
    }
    handleTyping();

  }, [counter]);

  return { word };
};

export default useTypingText;
