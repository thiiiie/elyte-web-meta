'use client';
import { ReasonCard } from "@/components/ReasonCard"
import { Button } from "@/components/ui/button"
import { encryptData } from "@/helpers/encrypt";
import { storage } from "@/lib/storage";
import { useRouter } from "next/navigation";
import { useState } from "react"
import { PiSmileyDuotone, PiSmileySadDuotone } from "react-icons/pi"

const options = [
  {
    label: 'Não estou!',
    Icon: PiSmileyDuotone,
  },
  {
    label: 'Sim, estou!',
    Icon: PiSmileySadDuotone,
  }
]

export const NegativeForm = () => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  function handleSelectOption(index: number) {
    setSelectedOption(index);
    setError(null);
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    if (selectedOption === null) {
      return setError('Selecione uma opção antes de continuar');
    }

    const areNegative = options[selectedOption].label;

    const encryptedReason = encryptData(
      areNegative
    );

    localStorage.setItem(storage.keys.negative, encryptedReason);
    router.push('/loading');
  }

  return (
    <form className="text-left" onSubmit={handleSubmit}>
      <div className="flex gap-4">
        {options.map((option, index) => (
          <ReasonCard
            key={option.label}
            Icon={option.Icon}
            label={option.label}
            selected={selectedOption === index}
            onClick={() => handleSelectOption(index)}
          />
        ))}
      </div>

      {error && <p className="mt-2 text-sm text-red-500">{error}</p>}

      <Button className="mt-4 px-10">Continuar</Button>
    </form>
  )
}
