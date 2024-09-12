import { Card } from "@/components/Card";
import PageLayout from "@/components/PageLayout";
import { NegativeForm } from "./_form";

export default function NegativePage() {
  return (
    <PageLayout>
      <Card>
        <h1 className="text-left text-xl font-bold mb-4">
          Você está negativado?
        </h1>

        <NegativeForm />
      </Card>
    </PageLayout>
  );
}