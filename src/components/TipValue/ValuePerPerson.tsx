interface Props {
  label: string;
  amount: number | null;
  testId: string;
}

function ValuePerPerson({ label, amount, testId }: Props) {
  return (
    <div className="flex flex-col items-center justify-between 2xs:flex-row">
      <div className="min-w-[100px]">
        <h1 className="font-bold text-white">{label}</h1>
        <h2 className="font-bold text-neutral-600">/ person</h2>
      </div>
      <span
        className="max-w-[240px] truncate text-5xl font-bold text-primary"
        data-testid={testId}
        title={amount?.toFixed(2).toString() ?? ""}
      >
        ${(amount ?? 0).toFixed(2)}
      </span>
    </div>
  );
}

export default ValuePerPerson;
