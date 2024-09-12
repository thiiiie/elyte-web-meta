"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { LoadingForm } from "../_form";

export const LoadedPage = () => {
	const router = useRouter();

	function handleAccept() {
		router.push("/pix");
	}

	return (
		<main className="mt-10 text-center max-w-[500px] w-[90%] mx-auto">
			<h1 className="text-xl text-primary-foreground font-medium">
				Parabéns, asfsaf!
			</h1>
			<h2 className="text-xl text-primary-foreground font-medium">
				Elyte tem uma proposta para você!
			</h2>

			<LoadingForm />

			<Button
				className="mt-6 bg-background text-primary px-12"
				onClick={handleAccept}
			>
				Aceitar proposta
			</Button>
		</main>
	);
};
