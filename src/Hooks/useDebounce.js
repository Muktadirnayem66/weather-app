import { useEffect, useRef } from "react";

const useDebounce = (callback, delay) => {
  const timeOutRef = useRef(null);

  useEffect(()=>{
   return ()=>{
    if(timeOutRef.current){
      clearTimeout(timeOutRef.current);
    }
   }

  },[])

  const debounceCallback = (...arg) => {
    if (timeOutRef.current) {
      clearTimeout(timeOutRef.current);
    }

    timeOutRef.current = setTimeout(()=>{
        callback(...arg)

    }, delay)
  };
  return debounceCallback
};

export default useDebounce;
