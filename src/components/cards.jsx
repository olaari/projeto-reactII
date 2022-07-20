import bandas from "../dados"

function Cards() {
    return (
        <div>
            {bandas.map(banda => {
                return (
                    <div key={banda.id}>
                        <h2>{banda.artista}</h2>
                        <p>{banda.genero}</p>
                        <img src={banda.capa} alt="" />
                    </div>
                )
            })}
        </div>
    )
}
export default Cards