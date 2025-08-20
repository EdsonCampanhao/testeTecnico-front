import { get } from "http";
import React from "react";
import { useState } from "react";
type setEvent = {
    eventOfComponent: React.Dispatch<React.SetStateAction<string>>;
    eventOfForm: React.Dispatch<React.SetStateAction<string>>;
    eventOfError: React.Dispatch<React.SetStateAction<string>>;


}



export default function SearchForm({ eventOfComponent, eventOfForm, eventOfError }: setEvent) {

    const [getLocal, setLocal] = useState("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if(getLocal == ''){
            eventOfError("Por favor, digite o nome de uma cidade!")
            return eventOfComponent("Error")
        }

        handleLocalInput();
        handleComponent();
    }
    const handleLocalInput = () => {
        eventOfForm(getLocal)
    }
    const handleComponent = () => {
        eventOfComponent("ShowPkm")
    }

    return (


        <form
            action="GET"
            onSubmit={handleSubmit}
            className="w-full max-w-sm mx-auto flex flex-col justify-center items-center gap-6 p-6"
        >
            <label
                htmlFor="local"
                className="font-medium text-2xl text-blue-700 text-center leading-relaxed sm:text-3xl"
            >
                Onde você deseja procurar?
            </label>

            <input
                type="text"
                id="local"
                name="local"
                value={getLocal}
                onChange={(e) => setLocal(e.target.value)}
                className="w-full px-4 py-3 bg-blue-50 border-2 border-blue-200 rounded-xl text-base text-blue-900 placeholder-blue-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:border-blue-400 focus:bg-white"
                placeholder="Digite a cidade que quer buscar"
            />

            <button
                type="submit"
                className="w-full px-6 py-3 bg-blue-500 text-white font-medium text-lg rounded-xl transition-all duration-200 hover:bg-blue-600 active:bg-blue-700 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 shadow-lg hover:shadow-xl"
            >
                🔍 Caçar Pokémon
            </button>
        </form>
    )
}