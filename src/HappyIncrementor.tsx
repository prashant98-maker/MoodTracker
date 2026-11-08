import { useDispatch } from "react-redux";
import { incrementHappy } from "./actions";
import type { AppDispatch } from "./store";
import Button from "./Button/Button.tsx";

const HappyIncrementor = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleClick = () => {
    dispatch(incrementHappy());
  };

  return (
    <div className="my-6">
      <p className="mb-2">Are you Happy?</p>

      <Button
        onClick={handleClick}
        className="bg-orange-600 hover:bg-orange-700"
      >
        Yes
      </Button>
    </div>
  );
};

export default HappyIncrementor;
