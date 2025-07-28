import { useState } from "react"
import { Buscador } from "./Buscador"
import { GridGifs } from "./GridGifs"
import { useSearchGif } from "./useSearchGif"

  

function App() {
const {input, onChange, onSubmit, gifs, first } = useSearchGif()
  return (
    <div>
      <Buscador
      input={input}
      onChange={onChange}
      onSubmit={onSubmit}
      />
      { first ? 
        (<h2>Carregando...</h2>) :
        (<GridGifs gifs={gifs}/>)
       }
      
      
    </div>

  )
}

export default App
  