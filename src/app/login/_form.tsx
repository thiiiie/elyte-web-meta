'use client';

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { encryptData } from "@/helpers/encrypt";
import { storage } from "@/lib/storage";
import { useRouter } from "next/navigation";
import { useState } from "react";

export function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const user = {
      email,
    }

    const encryptedUser = encryptData(
      JSON.stringify(user)
    );

    localStorage.setItem(storage.keys.user, encryptedUser);
    router.push("/about");
  }

  return (
    <form className="flex flex-col items-center gap-4 mt-6" onSubmit={handleSubmit}>
      <Input placeholder="E-mail" type="email" id="email" name="email" value={email} onChange={e => setEmail(e.target.value)} required />
      <Input placeholder="Senha" type="password" id="password" name="password" required />

      <Button className="w-full" variant="secondary" type="submit">
        Entrar
      </Button>
    </form>
  )
}