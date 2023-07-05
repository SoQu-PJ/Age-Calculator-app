import { useState } from "react";
import "./sass/main.scss";

import DateSettings from "./container/DateSettings";
import DateResult from "./container/DateResult";
import DateFooter from "./container/DateFooter";

function App() {

  const [day, setDay] = useState<number>(0);
  const [month, setMonth] = useState<number>(0);
  const [year, setYear] = useState<number>(0);

  return (
    <>
      <main className="data-main">
        <DateSettings
          day={day}
          month={month}
          year={year}
          setDay={setDay}
          setMonth={setMonth}
          setYear={setYear}
        />
        <DateResult
          day={day}
          month={month}
          year={year}
        />
      </main>
      <DateFooter />
    </>
  );

}

export default App
