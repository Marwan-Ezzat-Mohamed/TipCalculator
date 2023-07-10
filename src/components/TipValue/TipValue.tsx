import { memo } from "react";
import ValuePerPerson from "./ValuePerPerson";

interface Props {
  tipAmountPerPerson: number;
  totalPerPerson: number;
  resetAll: () => void;
}

function TipValue({ tipAmountPerPerson, totalPerPerson, resetAll }: Props) {
  const isDisabled = tipAmountPerPerson === 0 && totalPerPerson === 0;

  return (
    <div className="flex h-full w-full flex-grow flex-col justify-between rounded-2xl bg-neutral-900 p-10">
      <section className="flex flex-col space-y-14 ">
        <ValuePerPerson
          label="Tip Amount"
          amount={tipAmountPerPerson}
          testId="tip-amount-per-person-text"
        />
        <ValuePerPerson
          label="Total"
          amount={totalPerPerson}
          testId="total-per-person-text"
        />
      </section>

      <button
        onClick={() => resetAll()}
        disabled={isDisabled}
        data-testid="reset-button"
        className="w-full rounded-md bg-primary py-3 text-xl font-extrabold text-neutral-900 disabled:bg-neutral-600"
      >
        RESET
      </button>
    </div>
  );
}

export default memo(TipValue);
