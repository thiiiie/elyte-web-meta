"use client";
import { useEffect, useState } from "react";
import { LoadedPage } from "./(components)/_loaded";
import { LoadingUI } from "./(components)/_loading";

export function LoadingClient() {
	const [isLoaded, setIsLoaded] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			setIsLoaded(true);
		}, 7000);
	}, []);

	return isLoaded ? <LoadedPage /> : <LoadingUI />;
}
