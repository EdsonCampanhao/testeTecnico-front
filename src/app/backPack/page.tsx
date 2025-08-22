"use client";

import React, { useEffect, useState } from "react";
import Card from "./card/card";
import Link from "next/link";

type Pkm = {
  name: string;
  sprite: string;
};

export default function BackPackPage() {
  const [pokemons, setPokemons] = useState<Pkm[]>([]);

  useEffect(() => {
    const catchedPokemons = localStorage.getItem("pokemons");
    if (catchedPokemons) {
      setPokemons(JSON.parse(catchedPokemons));
    }
  }, []);

  return (
    <section className="bg-blue-200 h-screen flex justify-center items-center gap-2 flex-wrap">
      {pokemons.map((pokemon) => (
        <Card key={pokemon.name} name={pokemon.name} sprite={pokemon.sprite} />
      ))}
      <Link href="/home"> Voltar</Link>
    </section>
  );
}