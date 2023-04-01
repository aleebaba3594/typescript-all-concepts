import {
  useAppDispatch,
} from "../../redux/CustomHooksForRedux";
import { increment } from "../../redux/slices/CounterSlices";
import "../../styles/NewTodo.css";

function CounterPage1() {
  const dispatch = useAppDispatch();

  return (
    <div>
      <hr />
      <h3>Counter</h3>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        plus 1
      </button>
    </div>
  );
}

export default CounterPage1;
