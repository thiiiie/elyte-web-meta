import { Header } from "@/components/Header";
import { LoadingClient } from "./_client";

export default function LoadingPage() {
	return (
		<div className="w-full min-h-[100dvh] bg-primaryBackground">
			<div className="border-b border-b-[#ffffff4d]">
				<Header />
			</div>

			<LoadingClient />
		</div>
	);
}
