import Link from "next/link";
export default function SuccesMessage() {
    return (
        <div className="bg-green-100 border border-green-400 text-green-800 px-4 py-3 rounded-md mb-4 mt-4">
            <p className="mb-2">Usuário criado com sucesso!</p>
            <Link
                href="/"
                className="text-green-700 underline hover:text-green-900 font-medium"
            >
                Voltar para o login
            </Link>
        </div>
    );
}