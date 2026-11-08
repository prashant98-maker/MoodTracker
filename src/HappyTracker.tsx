import { memo } from "react";
import { useSelector } from "react-redux";
import { selectHappyCount } from "./selectors";

const HappyTracker = () => {
  const count = useSelector(selectHappyCount);

  return (
    <div className="bg-red-600 px-8 py-5 text-white rounded-md">
      You were happy {count} times
    </div>
  );
};

export default memo(HappyTracker);
