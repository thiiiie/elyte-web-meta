'use client';
import { Loading } from "@/components/Loading"
import { useEffect, useState } from "react";

export const LoadingUI = () => {
  const [text, setText] = useState("Buscando a melhor oferta para você");

  useEffect(() => {
    setTimeout(() => {
      setText('Verificando sua aptidão para receber crédito')
    }, 2000);

    setTimeout(() => {
      setText('Estamos quase lá...')
    }, 4000);
  }, []);

  return (
    <main className="mt-10 text-center max-w-[500px] w-[90%] h-full min-h-[70dvh] mx-auto flex flex-col items-center justify-center gap-4">
      <Loading className="border-[3px] w-6 h-6 border-gray-100/40 border-t-primary-foreground" />

      <h1 className="text-xl text-primary-foreground font-medium">{text}</h1>
    </main>
  )
}
