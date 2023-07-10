interface Props {
  label: string;
  amount: number | null;
  testId: string;
}

function ValuePerPerson({ label, amount, testId }: Props) {
  return (
    <div className="flex items-center justify-between">
      <div>
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
