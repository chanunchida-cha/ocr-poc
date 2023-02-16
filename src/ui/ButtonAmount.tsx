import React, { ChangeEvent } from "react";

type Props = {
  amount?: number;
  setAmount: (amount: number) => void;
  result: string;
};

function ButtonAmount({ amount, setAmount, result }: Props) {
  return (
    <div className="flex flex-row">
      <div className="">
        <button
          disabled={amount === 0 && result === ""}
          className="text-text-button-plus-minus border px-2 rounded-l-xl"
          onClick={() => {
            setAmount(amount! - 1);
          }}
        >
          -
        </button>
      </div>
      <div className="basis-8">
        <input className="border w-full text-center" value={amount} />
      </div>
      <div className="">
        <button
          disabled={result === ""}
          className="text-text-button-plus-minus border px-2 rounded-r-xl"
          onClick={() => {
            setAmount(amount! + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default ButtonAmount;
