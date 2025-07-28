

export const Buscador = ({onSubmit, input, onChange})=>{
    return(
        <form className="form-busca" onSubmit={onSubmit}>
            <input className="buscar" placeholder="Nome do Gif" value={input} onChange={onChange} />
        </form>
    )
}