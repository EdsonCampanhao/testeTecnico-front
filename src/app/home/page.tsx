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
                console.log(getLocal)

                const response = await fetch(`http://localhost:3000/getPKM?city=${getLocal}`);
                console.log(response)
                const json = await response.json();
                return setPokemon(json)

            } catch (err) {
                return console.log(err)
            }
        };

        fetchData()

    }, [getLocal]);



    return (
        <section className=" bg-amber-200 h-screen flex justify-center items-center">

            {getCurrentComponent === "Form"
                ? <SearchForm eventOfComponent={setCurrentComponent} eventOfForm={setLocal} />
                : getPokemon != null
                    ? <ShowPKM event={setCurrentComponent} pokemon={getPokemon} />
                    : <ShowPKM event={setCurrentComponent} pokemon={null} />
            }

        </section>
    )
}