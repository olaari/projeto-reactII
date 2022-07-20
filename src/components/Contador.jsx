import { useState } from "react"
//não posso esquecer de importar o userState de dentro do react

function Contador() {
    //chamr o userState criando um array que recebe duas informações
    // variável e a função atualizadora da variável
    //Dentro do parametro do usestate vai o valor inicial da variável
    const [contador, setContador] = useState(0)

    //criar uma função que será chamada no onclick
    //essa função recebe a regra que vai atualizar o contador
    function incrementa() {
        setContador(contador + 1)
    }
    return (
        <>
            {/* //dentro do elemento que eu quero mostrar na tela eu chamo minha variável*/}
            <h1>{contador}</h1>
            {/*dentro do butão eu chamo a função que está chamando a função atualizadora*/}
            <button onClick={incrementa}>Conta +1</button>
        </>
    )
}
export default Contador