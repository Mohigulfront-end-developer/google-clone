import { useEffect, useState } from 'react'

const useGoogle = term => {
    const [data, setData]= useState ();

    useEffect(() => {
        fetch(`https://cse.google.com/cse?cx=37dec2db85a314ac3
            ${process.env.REACT_APP_API_KEY}&cx=${process.env.REACT_APP_CONTEXT_KEY}&q=${term}`);
    }, [term])
    .then(response => response.json())
    .then(result => {
        setData(result)
    })
  return {data}
}

export default useGoogle;