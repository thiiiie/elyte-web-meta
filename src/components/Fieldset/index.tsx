import { forwardRef, type ComponentProps } from "react";
import { Input } from "../ui/input";
import { Loading } from "../Loading";
import { CurrencyInput } from "../CurrencyInput";

interface FieldsetProps extends ComponentProps<typeof Input> {
  label: string;
  error?: string;
  loading?: boolean;
  isCurrency?: boolean;
}

export const Fieldset = forwardRef<HTMLInputElement, FieldsetProps>(({
  label,
  error,
  loading = false,
  isCurrency = false,
  ...rest
}, ref) => {
  return (
    <fieldset className="flex flex-col text-left items-left">
      <label className="text-sm text-details font-medium">{label}</label>

      {isCurrency ? <CurrencyInput ref={ref} disabled={loading} {...rest} /> : <Input ref={ref} disabled={loading} {...rest} />}

      {error && <p className="text-xs text-red-500">{error}</p>}
      {loading && <Loading />}
    </fieldset>
  );
});
