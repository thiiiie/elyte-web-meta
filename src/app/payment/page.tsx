import { FaPix } from "react-icons/fa6";

import { Card } from "@/components/Card";
import { Countdown } from "@/components/Countdown";
import PageLayout from "@/components/PageLayout";
import { PaymentStep } from "@/components/PaymentStep";
import { PiCalculatorDuotone, PiHandHeartDuotone, PiPixLogoDuotone, PiShieldCheckDuotone, PiUserCircleCheckDuotone } from "react-icons/pi";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FrequentQuestions } from "@/components/FrequentQuestions";


export default function PaymentPage() {
  return (
    <PageLayout>
      <section className="mb-6">
        <h1 className="text-2xl text-primary font-medium leading-6">Parabéns, falta pouco para você receber R$ 50,00!</h1>

        <hr className="border-primary border-[1px] my-3 w-20" />

        <p className="text-details">Você está a um passo de receber seu empréstimo, efetue o pagamento da tarifa de cadastro para autorizar o saque imediatamente para sua conta.</p>
      </section>

      <section className="relative w-full mb-6">
        <div className="absolute w-[105%] -left-[2.5%] top-[10px] h-[430px] border border-gray-400 p-6 rounded-lg" />
        <div className="absolute w-[100%] h-[450px] border border-gray-400 p-6 rounded-lg" />

        <div className="w-[90%] pl-6 py-14 mb-6">
          <h2 className="text-xl font-medium">O que é a Tarifa de Cadastro?</h2>
          <p className="text-details text-lg mb-4">Aumente o volume 📢📢📢</p>

          <video className="rounded-lg border border-input-border" src="/videos/1.mp4" controls />
        </div>
      </section>

      <section className="flex flex-col mb-6">
        <PaymentStep
          title="Simulação"
          description="Simulação realizada e cadastro concluído"
          Icon={PiCalculatorDuotone}
          variant="green"
        />

        <div className="h-8 w-1 bg-gray-300 relative left-[6px] rounded" />

        <PaymentStep
          title="Análise de Crédito"
          description="Oferta de crédito disponível para você"
          Icon={PiUserCircleCheckDuotone}
          variant="green"
        />

        <div className="h-8 w-1 bg-gray-300 relative left-[6px] rounded" />

        <PaymentStep
          title="Pagamento de Tarifa"
          description="Aguardando pagamento para liberação do crédito"
          Icon={PiPixLogoDuotone}
          variant="red"
        />

        <div className="h-8 w-1 bg-gray-300 relative left-[6px] rounded" />

        <PaymentStep
          title="Crédito na conta"
          description="Crédito enviado para sua conta bancária"
          Icon={PiHandHeartDuotone}
        />
      </section>

      <Countdown />

      <Card className="flex flex-col gap-4">
        <h2 className="text-xl font-medium text-center flex items-center justify-center gap-2">
          Pague via pix <FaPix className="text-[#3db1a5]" />
        </h2>
        <p className="text-details">O pagamento será confirmado imediatamente</p>

        <span className="text-2xl font-bold text-[#3db1a5]">R$ 37,00</span>

        <Button asChild>
          <Link href="https://checkout.syfrapay.com/12dd37-3/checkout/lkkowTTg8IZ8xhg">Pagar agora</Link>
        </Button>

        <p className="flex items-center justify-center gap-2">
          <PiShieldCheckDuotone className="text-green-600 text-2xl" />
          Ambiente seguro
        </p>
      </Card>

      <h1 className="text-xl font-medium my-6">Algumas pessoas que mudaram de vida</h1>

      <video className="rounded-lg border border-input-border" src="/videos/2.mp4" controls />
      <video className="rounded-lg border border-input-border" src="/videos/3.mp4" controls />
      <video className="rounded-lg border border-input-border" src="/videos/4.mp4" controls />

      <FrequentQuestions />
    </PageLayout>
  );
}