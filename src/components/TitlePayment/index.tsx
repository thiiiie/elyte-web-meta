'use client';

import { currencyMask } from "@/helpers/currencyMask";
import { decryptData } from "@/helpers/encrypt";
import { storage } from "@/lib/storage";
import { useEffect, useState } from "react";

export const TitlePayment = () => {
  const [value, setValue] = useState('000');

  useEffect(() => {
    const price = localStorage.getItem(storage.keys.price);

    if (price) {
      const decryptedPrice = decryptData(price);
      setValue(decryptedPrice);
    }
  }, [])

  return (
    <h1 className="text-2xl text-primary font-medium leading-6">
      Parabéns, falta pouco para você receber R$ {currencyMask(value)}!
    </h1>
  )
}
