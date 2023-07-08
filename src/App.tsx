import { useState } from "react";
import "./sass/main.scss";

import DateSettings from "./container/DateSettings";
import DateResult from "./container/DateResult";
import DateFooter from "./container/DateFooter";

function App() {

  const [calculatedDay, setCalculatedDay] = useState<number | null>(null);
  const [calculatedMonth, setCalculatedMonth] = useState<number | null>(null);
  const [calculatedYear, setCalculatedYear] = useState<number | null>(null);

  return (
    <>
      <main className="data-main">
        <DateSettings
          setCalculatedDay={setCalculatedDay}
          setCalculatedMonth={setCalculatedMonth}
          setCalculatedYear={setCalculatedYear}
        />
        <DateResult
          calculatedDay={calculatedDay}
          calculatedMonth={calculatedMonth}
          calculatedYear={calculatedYear}
        />
      </main>
      <DateFooter />
    </>
  );

}

export default App


