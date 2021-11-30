// NPM Packages
import { useState, useEffect } from "react";

export default function useFetch(url, storageKey) {
  const [status, setStatus] = useState(0); // 0 - loading, 1 - loaded, 2 - error
  const [data, setData] = useState([]);
  const [currentUrl, setCurrentUrl] = useState(url);

  useEffect(() => {
    fetchData();
  }, [currentUrl]);

  // Methods
  function fetchData() {
    const sessionStorageItems = sessionStorage.getItem(storageKey);

    if (!currentUrl) {
      sessionStorage.setItem(storageKey, JSON.stringify(data));
      setStatus(1);
      return;
    }

    if (sessionStorageItems) {
      setData(JSON.parse(sessionStorageItems));
      setStatus(1);
    } else {
      fetch(currentUrl)
        .then(handleResponseErrors)
        .then((json) => onSuccess(json))
        .catch((error) => onFail(error));
    }
  }

  function handleResponseErrors(response) {
    if (response.ok) {
      return response.json();
    }
    throw Error(response.statusText);
  }

  function onSuccess(json) {
    setData([...data, ...json.results]);
    setCurrentUrl(json.next);
  }

  function onFail(error) {
    console.error(`The data loading is failed: ${error}.`);
    setStatus(2);
  }

  return { status, data };
}
