'use client';

import { Fieldset } from "@/components/Fieldset";
import { Loading } from "@/components/Loading";
import { Select } from "@/components/Select";
import { Button } from "@/components/ui/button";
import { cepMask } from "@/helpers/cepMask";
import { encryptData } from "@/helpers/encrypt";
import { storage } from "@/lib/storage";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  cep: z.string({ required_error: 'Digite um CEP' }).min(8, "O CEP deve ter 8 dígitos"),
  address: z.string({ required_error: 'Digite seu endereço' }).min(1, 'Digite seu endereço'),
  number: z.string({ required_error: 'Digite o número' }).min(1, 'Digite o número'),
  complement: z.string().optional(),
  neighborhood: z.string({ required_error: 'Digite o bairro' }).min(1, 'Digite o bairro'),
  city: z.string({ required_error: 'Digite a cidade' }).min(1, 'Digite a cidade'),
  state: z.string({ required_error: 'Digite o estado' }).min(1, 'Digite o estado'),
})

type FormValues = z.infer<typeof formSchema>

interface IBGEUF {
  sigla: string;
  nome: string;
}

interface UF {
  value: string;
  label: string;
}

export const AddressForm = () => {
  const [ufs, setUfs] = useState<UF[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadingCEP, setLoadingCEP] = useState(false);
  const [cepLoaded, setCepLoaded] = useState(false);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    setError,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema)
  });

  useEffect(() => {
    fetch('https://servicodados.ibge.gov.br/api/v1/localidades/estados')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setUfs(data.map((uf: IBGEUF) => ({
          value: uf.sigla,
          label: uf.nome
        })));
      }).finally(() => {
        setLoading(false);
      });
  }, []);

  function onSubmit(data: FormValues) {
    const encryptedAddress = encryptData(JSON.stringify(data));

    localStorage.setItem(storage.keys.address, encryptedAddress);

    router.push('/terms');
  }

  function handleChangeCep(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.value.length > 7) {
      setLoadingCEP(true);
      fetch(`https://viacep.com.br/ws/${e.target.value.replace(/\D/g, '')}/json/`)
        .then(response => response.json())
        .then(data => {
          console.log(data)
          if (data.erro) {
            return;
          }

          const { logradouro, bairro, localidade, uf } = data;
          setValue('address', logradouro);
          setValue('neighborhood', bairro);
          setValue('city', localidade);
          setValue('state', uf);
        }).finally(() => {
          setLoadingCEP(false);
          setCepLoaded(true);
        });
    }

    e.target.value = cepMask(e.target.value);
  }

  if (loading) {
    return <Loading className="w-10 h-10 border-4 mt-4" />
  }

  return (
    <form id="address-form" className='flex flex-col gap-2 mt-4' onSubmit={handleSubmit(onSubmit)}>
      <Fieldset
        label='CEP'
        placeholder="00000-000"
        error={errors.cep?.message}
        loading={loadingCEP}
        {...register('cep', {
          onChange: handleChangeCep
        })}
      />

      {cepLoaded && (
        <>
          <Fieldset
            label='Rua'
            error={errors.address?.message}
            {...register('address')}
          />

          <Fieldset
            label='Número'
            error={errors.number?.message}
            {...register('number')}
          />

          <Fieldset
            label='Complemento'
            placeholder="Ex: Bloco A, Torre 2"
            error={errors.complement?.message}
            {...register('complement')}
          />

          <Fieldset
            label='Bairro'
            error={errors.neighborhood?.message}
            {...register('neighborhood')}
          />

          <Fieldset
            label='Cidade'
            error={errors.city?.message}
            {...register('city')}
          />

          <Select
            label='Estado'
            options={ufs}
            placeholder="Selecione"
            defaultValue={getValues("state")}
            onChange={(value) => setValue('state', value)}
            error={errors.state?.message}
          />

          <Button className="w-fit px-10 mt-2" type='submit'>Continuar</Button>
        </>
      )}
    </form>
  )
}
