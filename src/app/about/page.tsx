import { Card } from "@/components/Card";
import PageLayout from "@/components/PageLayout";
import { AboutForm } from "./_form";

export default function AboutPage() {
  return (
    <PageLayout>
      <Card className="text-left flex flex-col gap-1">
        <h1 className="text-xl font-bold">Sobre você</h1>
        <p className="text-details">Precisamos de algumas informações para continuar</p>

        <AboutForm />
      </Card>
    </PageLayout>
  );
}