import { useAppSelector } from "../../redux/CustomHooksForRedux";

function CounterOutput() {
  const count = useAppSelector((state) => state.counter.value);

  return (
    <span>
      <p>output here</p>
      <button>{count}</button>
    </span>
  );
}

export default CounterOutput;
