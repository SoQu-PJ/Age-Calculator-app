import "./sass/main.scss";

import DateSettings from "./container/DateSettings";
import DateResultButton from "./container/DateResultButton";
import DateResult from "./container/DateResult";
import DateFooter from "./container/DateFooter";

function App() {

  return (
    <>
      <main className="data-main">
        <DateSettings />
        <DateResultButton />
        <DateResult />
      </main>
      <DateFooter />
    </>
  );

}

export default App
