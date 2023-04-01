import { useAppDispatch } from "../../redux/CustomHooksForRedux";
import { decrement } from "../../redux/slices/CounterSlices";
import "../../styles/NewTodo.css";

function CounterPage2() {
  const dispatch = useAppDispatch();

  return (
    <div>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        minus 1
      </button>
    </div>
  );
}

export default CounterPage2;
