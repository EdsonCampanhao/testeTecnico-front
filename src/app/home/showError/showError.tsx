import { error } from "console"

type error = {
    error: string
    eventOfForm: React.Dispatch<React.SetStateAction<string>>;
}

export default function ShowError({error,eventOfForm}:error) {
    const handleSubmit=()=>{
        eventOfForm("Form")
    }
    return (
        <>
            <section className="w-full max-w-sm mx-auto flex flex-col justify-center items-center gap-6 p-6" >

                <div className=" bg-red-100 rounded-full flex justify-center items-center border-4 border-red-200" >
                    <div className="text-4xl" >❌</div>

                    <div className="text-center" >
                        <h2 className="font-medium text-xl text-red-600 mb-2 sm:text-2xl" >
                            Oops! {error}
                        </h2>
                    </div>

                </div>



                    < button onClick={ handleSubmit } className="w-full px-6 py-3 bg-blue-500 text-white font-medium text-lg rounded-xl transition-all duration-200 hover:bg-blue-600 active:bg-blue-700 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 shadow-lg hover:shadow-xl" >
                        🔍 Buscar Outro Pokémon
                    </button>

            </section>
        </>
    )
}