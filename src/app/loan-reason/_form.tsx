'use client';
import { ReasonCard } from "@/components/ReasonCard"
import { Button } from "@/components/ui/button";
import { encryptData } from "@/helpers/encrypt";
import { storage } from "@/lib/storage";
import { useRouter } from "next/navigation";
import { useState } from "react"
import { PiBasketDuotone, PiCarDuotone, PiCreditCardDuotone, PiDotsThreeDuotone, PiHouseLineDuotone, PiNewspaperClippingDuotone, PiSuitcaseSimpleDuotone, PiTicketDuotone } from "react-icons/pi"

const options = [
  {
    label: 'Pagar dívidas',
    Icon: PiNewspaperClippingDuotone,
  },
  {
    label: 'Pagar cartão de crédito',
    Icon: PiCreditCardDuotone,
  },
  {
    label: 'Comprar veículo',
    Icon: PiCarDuotone,
  },
  {
    label: 'Investir em um negócio',
    Icon: PiSuitcaseSimpleDuotone,
  },
  {
    label: 'Reformar a casa',
    Icon: PiHouseLineDuotone,
  },
  {
    label: 'Pagar cheque especial',
    Icon: PiTicketDuotone,
  },
  {
    label: 'Compras em geral',
    Icon: PiBasketDuotone,
  },
  {
    label: 'Outro motivo',
    Icon: PiDotsThreeDuotone,
  },
]

export const LoanReasonForm = () => {
  const [selectedOption, setSelectedOption] = useState<number>(0);
  const router = useRouter();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()

    const reason = options[selectedOption].label;

    const encryptedReason = encryptData(
      reason
    );

    localStorage.setItem(storage.keys.loanReason, encryptedReason);
    router.push('/loan-info')
  }

  return (
    <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit}>
      {options.map((option, index) => (
        <ReasonCard
          onClick={() => setSelectedOption(index)}
          label={option.label} Icon={option.Icon}
          selected={selectedOption === index} key={option.label}
        />
      ))}

      <Button>Continuar</Button>
    </form>
  )
}
