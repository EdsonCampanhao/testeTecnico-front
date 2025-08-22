
type pkm = {
    name: string;
    sprite: string;
}
export default function Card({ name, sprite }) {
    return (
        <div className="bg-white rounded-lg shadow-lg p-4 text-center transform hover:scale-105 transition-transform duration-200">
            <div className="mb-3">
                <img
                    src={sprite}
                    alt={name}
                    className="w-24 h-24 mx-auto pixelated"
                    style={{ imageRendering: 'pixelated' }}
                />
            </div>
            <p className="text-lg font-semibold text-gray-800 capitalize">
                {name}
            </p>
        </div>
    )


}