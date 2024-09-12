import { Card } from "@/components/Card";
import { LoginForm } from "./_form";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import PageLayout from "@/components/PageLayout";

export default function LoginPage() {
  return (
    <PageLayout>
      <Card>
        <h1 className="text-xl font-medium">Login com Facebook</h1>

        <LoginForm />

        <div className="flex items-center gap-4 my-4">
          <div className="w-full h-[1px] border border-dashed" />
          <p>Ou</p>
          <div className="w-full h-[1px] border border-dashed" />
        </div>

        <Button className="w-full font-bold" asChild>
          <Link href="/register">Cadastrar-se</Link>
        </Button>
      </Card>
    </PageLayout>

  );
}
