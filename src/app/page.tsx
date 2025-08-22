"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const router = useRouter();

  const [getEmail, setEmail] = useState("")
  const [getPassword, setPassword] = useState("")
  const apiUrl = process.env.NEXT_PUBLIC_API_URL;
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const response = await fetch(`${apiUrl}/login`, {
        method: "Post",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(
          {
            email: getEmail,
            password: getPassword
          }
        )
      })


      const json = await response.json();
      localStorage.setItem("pokeHunterUser", JSON.stringify(json));

    }
    catch (err) {
      return console.log("Erro ao tentar conectar", err)
    }

    // try {
    //   const user = JSON.parse(localStorage.getItem("pokeHunterUser") || "{}");
    //   const response = await fetch(`${apiUrl}/catchedPokemon`, {
    //     method: "Post",
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(
    //       {
    //         userId:user.userId
    //       }
    //     )
    //   })
    //   const json = await response.json();
    // } catch (err) {
    //   return console.log("erro ao pegar os pokemons capturados",err)
    // }

    router.push("/home")
  }


  return (
    <section className="bg-baby-blue-50 min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-lg p-6 sm:p-8">
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold text-baby-blue-700">Bem-vindo</h1>
            <p className="text-gray-600 mt-2">Faça login em sua conta</p>
          </div>

          <form className="space-y-6" id="loginForm" onSubmit={handleSubmit}>


            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-baby-blue-500 focus:border-baby-blue-500 text-gray-900"
                placeholder="Digite seu email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                Senha
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full px-3 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-baby-blue-500 focus:border-baby-blue-500 text-gray-900"
                placeholder="Digite sua senha"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>



            <button
              type="submit"
              className="border border-blue-300 w-full bg-baby-blue-600 hover:bg-baby-blue-500  font-medium py-3 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-baby-blue-500 "
            >
              Entrar
            </button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-gray-600">

              <Link href="/signUp" className="text-baby-blue-600 hover:text-baby-blue-700 font-medium">
                Cadastre-se aqui
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
