import { memo } from "react";
import { useSelector } from "react-redux";
import { selectSadCount } from "./selectors";

const SadTracker = () => {
  const count = useSelector(selectSadCount);

  return (
    <div className="bg-blue-600 px-8 py-5 text-white rounded-md">
      You were sad {count} times
    </div>
  );
};

export default memo(SadTracker);
