import { Gif } from "./Gif"

export const GridGifs = ({gifs})=>{
    return (
        <div className="conteiner">
         {
        gifs.map(gif=>(
          <Gif key={gif.id} gif={gif}/>
         ))
        }
        </div>
    )
}  