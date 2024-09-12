"use client";
import { Card } from "@/components/Card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useEffect, useState } from "react";
import { TermsText } from "./_terms-text";

export const TermsForm = () => {
	const [loaded, setLoaded] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setLoaded(true);
		}, 1500);
	}, []);

	return (
		<div className="flex flex-col py-6 -mt-10">
			<Card className="text-left">
				<h1 className="text-xl font-bold leading-6">Termos do empréstimo</h1>
				<TermsText />
			</Card>

			{loaded && (
				<Button className="my-4 px-10 mx-auto" asChild>
					<Link href="/payment">Li e aceito os termos</Link>
				</Button>
			)}
		</div>
	);
};
