import { useDispatch } from "react-redux";
import { incrementSad } from "./actions";
import type { AppDispatch } from "./store";
import Button from "./Button/Button.tsx";

const SadIncrementor = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = () => {
    dispatch(incrementSad());
  };

  return (
    <div className="my-6">
      <p className="mb-2">Are you Sad?</p>

      <Button onClick={handleClick} className="bg-blue-600 hover:bg-blue-700">
        Yes
      </Button>
    </div>
  );
};

export default SadIncrementor;
