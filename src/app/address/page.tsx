'use client';

import { Card } from "@/components/Card";
import PageLayout from "@/components/PageLayout";
import { decryptData } from "@/helpers/encrypt";
import { storage } from "@/lib/storage";
import { useEffect, useState } from "react";
import { AddressForm } from "./_form";

export default function AddressPage() {
  const [email, setEmail] = useState('email@email.com');

  useEffect(() => {
    const userEncrypted = localStorage.getItem(storage.keys.user);
    if (!userEncrypted) {
      return;
    }
    const user = JSON.parse(
      decryptData(userEncrypted)
    );

    setEmail(user.email);
  }, [])

  return (
    <PageLayout>
      <Card className="text-left">
        <h1 className="text-xl font-bold leading-6">Onde deseja receber o carnê da parcelas?</h1>
        <p className="text-details mt-2">Além de enviarmos o carnê para {email}, será enviado para o endereço abaixo em 7 dias úteis.</p>

        <AddressForm />
      </Card>
    </PageLayout>
  );
}