import {motion} from 'motion/react'

export const Gif =({gif})=>{
    return(
        <>
        <motion.img 
        initial={{opacity:0, scale:0}}
        animate={{opacity:1,scale:1, transition:{ duration:1}}}
        className="gif" 
        src={gif.images.original.url}
         alt={gif.title}
          />
        </>
    )
}