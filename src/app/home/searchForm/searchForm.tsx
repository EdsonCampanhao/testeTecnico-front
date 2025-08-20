import React from "react";
import { useState } from "react";
type setEvent = {
    eventOfComponent: React.Dispatch<React.SetStateAction<string>>;
    eventOfForm: React.Dispatch<React.SetStateAction<string>>;


}



export default function SearchForm({eventOfComponent,eventOfForm}:setEvent) {

    const [getLocal,setLocal]=useState("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleLocalInput();
        handleComponent();
    }
    const handleLocalInput = ()=>{
        console.log(getLocal)
        eventOfForm(getLocal)
    }
    const handleComponent = () =>{
        eventOfComponent("Show")
    }

    return (
        <form action="GET" onSubmit={handleSubmit} className="flex flex-col justify-center items-center gap-6">
            <label htmlFor="local" className=" font-medium text-4xl text-gray-700">
                Onde você deseja procurar?
            </label>
            <input
                type="text"
                id="local"
                name="local"
                value={getLocal}
                onChange={(e) => setLocal(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Digite uma cidade!"
            />
            <button>caçar pokemon</button>
        </form>
    )
}