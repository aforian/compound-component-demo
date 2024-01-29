import "./App.scss";
import CompoundAlertDemo from "./components/CompoundAlert";
import PropsAlertDemo from "./components/PropsAlert";

function App() {
  return (
    <div className="container">
      <PropsAlertDemo />
      <hr />
      <CompoundAlertDemo />
    </div>
  );
}

export default App;
