interface InfoCardProps {
  title: string;
  Icon: React.ElementType;
  description: string;
}

export const InfoCard = ({
  title,
  Icon,
  description,
}: InfoCardProps) => {
  return (
    <div className="flex flex-col gap-2 justify-between pt-2 pb-4 px-2 rounded-xl border-primary-foreground border text-primary-foreground text-left">
      <h3 className="text-lg font-bold">{title}</h3>

      <div className="flex items-center gap-2">
        <Icon className="text-xl" />

        <p>{description}</p>
      </div>
    </div>
  )
}
