import HappyTracker from "./HappyTracker";
import SadTracker from "./SadTracker";
import HappyIncrementor from "./HappyIncrementor";
import SadIncrementor from "./SadIncrementor";

function App() {
  return (
    <div className="min-h-screen p-8">
      <div className="mb-6">
        <HappyTracker />
      </div>

      <div className="mb-6">
        <SadTracker />
      </div>

      <HappyIncrementor />

      <SadIncrementor />
    </div>
  );
}

export default App;
