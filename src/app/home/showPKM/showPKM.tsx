type pkm = {
    local: string;
    name: string;
    sprite: string;
    type: string;
    temp: string;
    isRaining: boolean;
}
type showProps = {
    setPokemon: React.Dispatch<React.SetStateAction<string>>;
    getPokemon: pkm | null;
    eventOfComponent: React.Dispatch<React.SetStateAction<string>>;
    eventOfForm: React.Dispatch<React.SetStateAction<string>>;
}

export default function ShowPKM({ getPokemon, setPokemon, eventOfComponent, eventOfForm }: showProps) {
    const handleNewSearch = () => {
        eventOfComponent("Form")
        setPokemon(null)
        eventOfForm("")
    }

    if (!getPokemon) return (
        <section className="w-full max-w-sm mx-auto flex flex-col justify-center items-center gap-6 p-6">

            <div className="relative">
                <div className="w-20 h-20 animate-spin">
                    <div className="w-20 h-20 bg-red-500 rounded-full border-4 border-gray-800 relative overflow-hidden">
                        <div className="w-full h-10 bg-gradient-to-b from-red-400 to-red-600"></div>
                        <div className="w-full h-10 bg-gradient-to-b from-gray-100 to-white"></div>
                        <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-800 transform -translate-y-1/2"></div>
                        <div className="absolute top-1/2 left-1/2 w-6 h-6 bg-gray-800 rounded-full transform -translate-x-1/2 -translate-y-1/2 z-10">
                            <div className="w-4 h-4 bg-white rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
                        </div>
                    </div>
                </div>

                <div className="absolute -top-2 -right-2 w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
                <div className="absolute -bottom-2 -left-2 w-2 h-2 bg-blue-500 rounded-full animate-bounce delay-100"></div>
                <div className="absolute top-1/2 -right-4 w-2 h-2 bg-blue-600 rounded-full animate-bounce delay-200"></div>
                <div className="absolute top-1/2 -left-4 w-3 h-3 bg-blue-400 rounded-full animate-bounce delay-300"></div>
            </div>

            <div className="text-center">
                <h2 className="font-medium text-xl text-blue-700 mb-2 sm:text-2xl">
                    🔍 Procurando Pokémon...
                </h2>
                <p className="text-blue-600 text-sm animate-pulse">
                    Explorando a região em busca de criaturas selvagens
                </p>
            </div>

            <div className="flex justify-center items-center gap-2">
                <div className="w-3 h-3 bg-blue-400 rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce delay-100"></div>
                <div className="w-3 h-3 bg-blue-600 rounded-full animate-bounce delay-200"></div>
            </div>

            <div className="w-full bg-blue-50 rounded-xl p-4 border border-blue-200 animate-pulse">
                <div className="space-y-3">
                    <div className="flex justify-between items-center">
                        <span className="text-blue-600 text-sm">Analisando clima...</span>
                        <div className="w-16 h-2 bg-blue-200 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 rounded-full animate-pulse w-3/4"></div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-blue-600 text-sm">Detectando tipos...</span>
                        <div className="w-16 h-2 bg-blue-200 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 rounded-full animate-pulse w-1/2"></div>
                        </div>
                    </div>
                    <div className="flex justify-between items-center">
                        <span className="text-blue-600 text-sm">Localizando Pokémon...</span>
                        <div className="w-16 h-2 bg-blue-200 rounded-full overflow-hidden">
                            <div className="h-full bg-blue-500 rounded-full animate-pulse w-5/6"></div>
                        </div>
                    </div>
                </div>
            </div>

            <button
                onClick={handleNewSearch}
                className="w-full px-6 py-3 bg-blue-100 text-blue-700 font-medium text-lg rounded-xl border-2 border-blue-200 transition-all duration-200 hover:bg-blue-200 active:bg-blue-300 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
            >
                ❌ Cancelar Busca
            </button>

        </section>

    );

    return (


        <section className="w-full max-w-sm mx-auto flex flex-col justify-center items-center gap-6 p-6">

            <h2 className="font-medium text-xl text-blue-700 text-center leading-relaxed sm:text-2xl">
                Você encontrou um <span className="font-bold text-blue-800 capitalize">{getPokemon.name}</span> em <span className="font-bold text-blue-800">{getPokemon.local}</span>!
            </h2>

            <div className="w-32 h-32 bg-blue-50 rounded-full border-4 border-blue-200 flex justify-center items-center shadow-lg sm:w-40 sm:h-40">
                <img
                    src={getPokemon.sprite}
                    alt={`Imagem ilustrativa de um ${getPokemon.name}`}
                    className="w-24 h-24 object-contain sm:w-32 sm:h-32"
                />
            </div>

            <div className="w-full bg-blue-50 rounded-xl p-4 border border-blue-200">
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
                    <div className="bg-white rounded-lg p-3 text-center border border-blue-100 flex flex-col items-center">
                        <p className="text-blue-600 text-sm font-medium mb-1">Temperatura</p>
                        <p className="text-blue-800 font-bold">{getPokemon.temp} cº </p>
                    </div>

                    <div className="bg-white rounded-lg p-3 text-center border border-blue-100 flex flex-col items-center">
                        <p className="text-blue-600 text-sm font-medium mb-1">Tipo</p>
                        <p className="text-blue-800 font-bold capitalize">{getPokemon.type}</p>
                    </div>

                    <div className="bg-white rounded-lg p-3 text-center border border-blue-100 flex flex-col items-center">
                        <p className="text-blue-600 text-sm font-medium mb-1">Clima</p>
                        <p className="text-blue-800 font-bold">
                            {getPokemon.isRaining === true ? "🌧️" : "☀️"}
                        </p>
                    </div>
                </div>
            </div>

            <button
                onClick={handleNewSearch}
                className="w-full px-6 py-3 bg-blue-500 text-white font-medium text-lg rounded-xl transition-all duration-200 hover:bg-blue-600 active:bg-blue-700 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 shadow-lg hover:shadow-xl"
            >
                Nova Caçada
            </button>

        </section>
    )
}