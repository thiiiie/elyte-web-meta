import { Header } from "../Header";

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="w-full min-h-[100dvh] flex flex-col items-center justify-between">
      <div className="w-full">
        <Header />

        <main className="mt-10 max-w-[450px] w-[90%] mx-auto">
          {children}
        </main>
      </div>

      <footer className="bg-white w-full py-10 px-4 text-center text-md font-medium border-b-8 border-primary">
        <p>© 2024 Elyte S/A. CNPJ 39.433.535/0001-91.</p>

        <p>Avenida Presidente Wilson, 9, São Vicente/SP - CEP 11320-905</p>
      </footer>
    </div>
  );
}
