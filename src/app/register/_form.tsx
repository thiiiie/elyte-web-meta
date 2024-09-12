"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { encryptData } from "@/helpers/encrypt";
import { storage } from "@/lib/storage";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const RegisterForm = () => {
	const router = useRouter();
	const [email, setEmail] = useState("");

	function handleSubmit(e: React.FormEvent) {
		e.preventDefault();
		const user = {
			email,
		};

		const encryptedUser = encryptData(JSON.stringify(user));

		localStorage.setItem(storage.keys.user, encryptedUser);
		router.push("/about");
	}

	return (
		<form className="flex flex-col gap-3 mt-2" onSubmit={handleSubmit}>
			<Input
				placeholder="E-mail"
				id="email"
				name="email"
				type="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
				required
			/>
			<Input
				placeholder="Senha"
				id="password"
				name="password"
				type="password"
				required
			/>

			<Button type="submit" className="w-fit px-12">
				Criar conta
			</Button>
		</form>
	);
};
