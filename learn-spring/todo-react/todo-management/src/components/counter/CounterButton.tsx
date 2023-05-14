import { FC } from "react";

interface ICounterButton {
  by: number;
  incrementMethod: (by: number) => void;
  decrementMethod: (by: number) => void;
}

const CounterButton: FC<ICounterButton> = ({
  by,
  incrementMethod,
  decrementMethod,
}) => {
  return (
    <div className="Counter">
      <div>
        <button className="counterButton" onClick={() => incrementMethod(by)}>
          +{by}
        </button>
        <button className="counterButton" onClick={() => decrementMethod(by)}>
          -{by}
        </button>
      </div>
    </div>
  );
};

export default CounterButton;
