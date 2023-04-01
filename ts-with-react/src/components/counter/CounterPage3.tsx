import { useAppDispatch } from "../../redux/CustomHooksForRedux";
import { incrementByAmount } from "../../redux/slices/CounterSlices";
import "../../styles/NewTodo.css";

function CounterPage3() {
  const dispatch = useAppDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(incrementByAmount(20));
        }}
      >
        plus 20
      </button>
    </div>
  );
}

export default CounterPage3;
