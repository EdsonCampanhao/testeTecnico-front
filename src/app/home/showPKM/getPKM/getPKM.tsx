"use client"
import { useState } from "react";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

type pkm = {
    name: string;
    sprite: string
}


export default function GetPkm({ name, sprite }: pkm) {
    const [isCatched, setCatched] = useState(false)
    const handleClick = async ({ name, sprite }: pkm) => {

        try {
            const user = JSON.parse(localStorage.getItem("pokeHunterUser") || "{}");
            const response = await fetch(`${apiUrl}/catchPokemon`, {
                method: "Post",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(
                    {
                        userId: user.id,
                        name: name,
                        url: sprite
                    }
                )
            })
            const json = await response.json();
            const catchedPokemons = localStorage.getItem("pokemons");

            if (catchedPokemons == "") {
                const pokemons: pkm[] = []
                pokemons.push({ name: name, sprite: sprite })
                localStorage.setItem("pokemons", JSON.stringify(pokemons))
            } else {
                const pokemons: pkm[] = JSON.parse(catchedPokemons)
                pokemons.push({ name: name, sprite: sprite })
                localStorage.setItem("pokemons", JSON.stringify(pokemons))

            }
            setCatched(true)
        } catch (err) {
            console.log(err)
        }

    }

    return (<>
        {!isCatched ?
            <button
                onClick={() => { handleClick({ name, sprite }) }}
                className="w-full px-6 py-3 bg-blue-500 text-white font-medium text-lg rounded-xl transition-all duration-200 hover:bg-blue-600 active:bg-blue-700 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 shadow-lg hover:shadow-xl"
            >
                Capturar Pokemon
            </button> : <p

                className="w-full px-6 py-3 bg-green-500 text-white font-medium text-lg rounded-xl pointer-none  focus:outline-none focus:ring-2 shadow-lg hover:shadow-xl"
            >
                pokemon capturado com sucesso
            </p>}
    </>

    )
}