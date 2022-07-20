import { useState, useEffect } from "react"

const Repositorios = () => {
    const [repos, setRepos] = useState([]) //para buscar os dados da página
    const [search, setSearch] = useState('') //  termo a ser buscado
    const [filterRepos, setFilterRepos] = useState([]) // mostrar os repositórios que serão buscados a partir do termo

    useEffect(() => {
        const getdata = async () => {
            const response = await fetch('http://api.github.com/users/olaari/repos')
            const data = await response.json()

            setRepos(data)
        }
        getdata()
    }, [])

    const handleSearch = (e) => {
        setSearch(e.target.value)
    }

    useEffect(() => {
        setFilterRepos(repos.filter(repo => repo.name.includes(search)))
    }, [repos, search])

    return (
        <>
            <input placeholder="Digite um termo"
                onChange={handleSearch} />
            <ul>
                {filterRepos.map(repo => {
                    return (
                        <li key={repo.id} >{repo.name}</li>
                    )
                })}
            </ul>
        </>
    )
}
export default Repositorios