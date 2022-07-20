function input() {
    return (
        <input
            placerholder="digite seu nome"
            onChange={(e) => console.log(e.target.value)}
            type="text"
        />
    )
}
export default input