'use client'
import { useState, useEffect } from "react"
import SearchForm from "./searchForm/searchForm"
import ShowPKM from "./showPKM/showPKM"
import ShowError from "./showError/showError"
import BagIcon from "./bagIcon/bagIcon"






export default function () {

    const [getCurrentComponent, setCurrentComponent] = useState("Form")
    const [getLocal, setLocal] = useState("")
    const [getError, setError] = useState("")
    const [getPokemon, setPokemon] = useState()

    useEffect(() => {
        if (!getLocal) return;


        const fetchData = async () => {

            const apiUrl = process.env.NEXT_PUBLIC_API_URL;

            try {
                const user = JSON.parse(localStorage.getItem("pokeHunterUser") || "{}");
                console.log("tentei fetch")
                const response = await fetch(`${apiUrl}/getPKM?city=${getLocal}`, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json",
                        "Authorization": `Bearer ${user.jwt}` // ✅ envia o token JWT
                    }
                });
                console.log("Status:", response.status, response.statusText);
                const json = await response.json();
                console.log(json)
                if (json == "Nenhuma cidade encontrada!") {
                    setError(json)
                    return setCurrentComponent("Error")
                }
                return setPokemon(json)

            } catch (err) {
                return console.log(err)
            }
        };

        fetchData()

    }, [getLocal]);



    return (
        <section className=" bg-blue-200 h-screen flex justify-center items-center">
            <BagIcon />

            {
                getCurrentComponent === "Form" ?
                    <SearchForm eventOfComponent={setCurrentComponent} eventOfForm={setLocal} eventOfError={setError} /> :
                    getCurrentComponent === "ShowPkm" ?
                        getPokemon != null ?
                            <ShowPKM eventOfComponent={setCurrentComponent} eventOfForm={setLocal} getPokemon={getPokemon} setPokemon={setPokemon} />
                            : <ShowPKM eventOfComponent={setCurrentComponent} eventOfForm={setLocal} getPokemon={null} setPokemon={setPokemon} />
                        : <ShowError error={getError} eventOfForm={setCurrentComponent} />
            }

        </section>
    )
}
