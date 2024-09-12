'use client';
import { currencyMask } from "@/helpers/currencyMask";
import { decryptData } from "@/helpers/encrypt";
import { formatMoney } from "@/helpers/formatMoney";
import { storage } from "@/lib/storage";
import { format } from "date-fns";
import { useEffect, useMemo, useRef, useState } from "react"

interface UserInfo {
  email: string;
  name: string;
  address: string;
  cpf: string;
  price: number;
  installment: number;
}

export const TermsText = () => {
  const [user, setUser] = useState<UserInfo | null>(null);
  const now = useRef(new Date());

  const installmentValue = useMemo(() => {
    if (!user?.price || !user?.installment) {
      return 0;
    }

    const price = user.price / 100;

    return price / user.installment;
  }, [user?.price, user?.installment]);

  useEffect(() => {
    const userEncrypted = localStorage.getItem(storage.keys.user);
    const priceEncrypted = localStorage.getItem(storage.keys.price);
    const installmentEncrypted = localStorage.getItem(storage.keys.installment);

    if (!userEncrypted || !priceEncrypted || !installmentEncrypted) {
      return;
    }

    const user = JSON.parse(
      decryptData(userEncrypted)
    );

    const price = Number(
      decryptData(priceEncrypted)
    );

    const installment = JSON.parse(
      decryptData(installmentEncrypted)
    );

    console.log(user)

    setUser({
      ...user,
      price,
      installment: installment.value
    });
  }, []);

  return (
    <div className='mt-2 flex flex-col gap-3 text-details'>
      <p>
        Por este instrumento, o cliente <strong>{user?.name}</strong>, inscrito no CPF sob o número {user?.cpf}, e a empresa <strong>Elyte</strong>, firmam o presente termo de empréstimo na data de {format(now.current, 'dd/MM/yyyy')}, segundo as condições a seguir:
      </p>

      <p>
        O cliente solicita um empréstimo no valor total de <strong>R$ {currencyMask(String(user?.price))}</strong>. Este montante será dividido em 6 parcelas mensais, cada uma no valor de <strong>{formatMoney(installmentValue, 2)}</strong>.
      </p>

      <p>
        Ambas as partes concordam com os valores e condições estipulados neste termo. Este termo visa assegurar que tanto você quanto Elyte tenham clareza sobre o que foi acordado, garantindo uma relação transparente e confiável.
      </p>

      <p>
        Cordialmente,
      </p>
      <p className="-mt-4">
        Elyte
      </p>
    </div>
  )
}
