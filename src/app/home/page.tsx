'use client'
import { useState, useEffect } from "react"
import SearchForm from "./searchForm/searchForm"
import ShowPKM from "./showPKM/showPKM"


export default function () {

    const [getCurrentComponent, setCurrentComponent] = useState("Form")
    const [getLocal, setLocal] = useState("")
    const [getPokemon, setPokemon] = useState()

    useEffect(() => {
        if (!getLocal) return;


        const fetchData = async () => {

            try {
                const response = await fetch(`http://localhost:3000/getPKM?city=${getLocal}`);
                
                const json = await response.json();
                console.log(json)
                return setPokemon(json)

            } catch (err) {
                return console.log(err)
            }
        };

        fetchData()

    }, [getLocal]);



    return (
        <section className=" bg-blue-200 h-screen flex justify-center items-center">

            {getCurrentComponent === "Form"
                ? <SearchForm eventOfComponent={setCurrentComponent} eventOfForm={setLocal} />
                : getPokemon != null
                    ? <ShowPKM eventOfComponent={setCurrentComponent} eventOfForm={setLocal} getPokemon={getPokemon} setPokemon={setPokemon}/>
                    : <ShowPKM eventOfComponent={setCurrentComponent} eventOfForm={setLocal} getPokemon={null} setPokemon={setPokemon}/>
            }

        </section>
    )
}
