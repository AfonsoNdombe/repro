import React from "react";
import { useState } from "react";

export const useSearchGif = ()=>{
     // estado 
      const [input, setInput]=useState('')
      const [gifs, setGifs] = useState([])
      const [first, setFirst]=useState(false)
    
      const onChange = (e) =>{
        const valor = e.target.value
        setInput(valor)
      }
    
    const getGifs = async (query) =>{
      const url =`https://api.giphy.com/v1/gifs/trending?api_key=QJb5jqb3AGf9H4oDu0YUkT4GvOqh6QqR&q=${query}`
      setFirst(true)
      await new Promise(resolve=>{
        setTimeout(()=>{
            resolve(true)
        },500)
      })
      const response = await fetch(url);
      const data = await response.json();
      setFirst(false)
      return data.data
    }
    
    const onSubmit = async (e)=>{
      e.preventDefault()
      const gifs = await getGifs(input)
      setGifs(gifs)
    }

    
    return{
        onSubmit,
        onChange,
        input,
        gifs,
        first
    }
}