import Link from "next/link";
import React from "react";
import { GiBackpack } from "react-icons/gi";
export default function BagIcon() {
    return (
        <Link href={"backPack"}
            
            className="fixed  right-20 bottom-20 p-3 rounded-full bg-blue-400 hover:bg-blue-600  transition flex hover:scale-125  items-center justify-center"
            aria-label="Backpack"
        >
            <GiBackpack size={90} color="#1E40AF" />
        </Link>
    )
}
