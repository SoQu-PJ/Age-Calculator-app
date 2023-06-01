import "./sass/main.scss";

import DateSettings from "./container/DateSettings";
import DateResult from "./container/DateResult";
import DateFooter from "./container/DateFooter";

function App() {

  return (
    <>
      <main className="data-main">
        <DateSettings />
        <DateResult />
      </main>
      <DateFooter />
    </>
  );

}

export default App
