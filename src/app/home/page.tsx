'use client'
import { useState, useEffect } from "react"
import SearchForm from "./searchForm/searchForm"
import ShowPKM from "./showPKM/showPKM"


export default function () {

    const [getCurrentComponent, setCurrentComponent] = useState("Form")
    return (
        <section className=" bg-amber-200 h-screen flex justify-center items-center">

            {getCurrentComponent == "Form" ? <SearchForm event={setCurrentComponent}/> : <ShowPKM event={setCurrentComponent} pokemon={null} />}


        </section>
    )
}