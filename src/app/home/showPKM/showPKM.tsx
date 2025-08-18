type pkm = {
    name: string;
    img: string;
    type: string;
    temp: string;
    isRaining: boolean;
}
type showProps = {
    pokemon: pkm | null;
    event: React.Dispatch<React.SetStateAction<string>>
}

export default function ShowPKM({ pokemon, event }: showProps,) {
    const handleNewSearch = () => {
        event("Form")
    }

    if (!pokemon) return (
        <>
            <h1>pokemon ainda não implementado, mas lógica de troca de tela está funcional</h1>
            <button onClick={handleNewSearch}>Nova caçada</button>
        </>

    );

    return (
        <section className="flex flex-col justify-center items-center w-52">
            <h2>Você encontrou um {pokemon.name}</h2>
            <img srcSet={pokemon.img} alt={`Imagem ilustrativa de um ${pokemon.name}`}>
                <div className="flex justify-between">
                    <p>{pokemon.temp}</p>
                    <p>{pokemon.type}</p>
                    <p>{pokemon.isRaining}</p>
                </div>
            </img>
            <button onClick={handleNewSearch}>Nova caçada</button>
        </section>
    )
}