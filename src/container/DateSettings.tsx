import DateResultButton from "./DateResultButton";
import { IDateSettings } from "../ts/interface/IDateSettings";
import { useState } from "react";
import useDateDifference from "../hook/useDateDifference";

import isDateValid from "../ts/utils/isDateValid";


const DateSettings = ({
    setCalculatedDay,
    setCalculatedMonth,
    setCalculatedYear
}: IDateSettings) => {
    const date = new Date();

    const [day, setDay] = useState<number>(0);
    const [month, setMonth] = useState<number>(0);
    const [year, setYear] = useState<number>(0);

    const [wrongDate, setWrongDate] = useState<boolean | null>(null);
    const { days, months, years } = useDateDifference(new Date(year, month, day), date);


    const handleSubmit = (e: { preventDefault: () => void; }) => {

        if (isDateValid(day, month, year)) {
            setWrongDate(false);
            setCalculatedDay(days);
            setCalculatedMonth(months);
            setCalculatedYear(years)
        } else
            setWrongDate(true);

        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit} noValidate>
            <section className="date-settings">
                <fieldset className="data-fieldset">
                    <label htmlFor="days">Day</label>
                    <input className={wrongDate ? "data-fieldset-wrong" : ""} type="number" name="days" id="days" placeholder="DD" min={1} max={31} value={day === 0 ? "" : day} onChange={(e) => setDay(parseInt(e.target.value))} />
                </fieldset>
                <fieldset className="data-fieldset">
                    <label htmlFor="months">Month</label>
                    <input className={wrongDate ? "data-fieldset-wrong" : ""} type="number" name="months" id="months" placeholder="MM" min={1} max={12} value={month === 0 ? "" : month} onChange={(e) => setMonth(parseInt(e.target.value))} />
                </fieldset>
                <fieldset className="data-fieldset">
                    <label htmlFor="years">Year</label>
                    <input className={wrongDate ? "data-fieldset-wrong" : ""} type="number" name="years" id="years" placeholder="YYYY" min={1} max={date.getFullYear()} value={year === 0 ? "" : year} onChange={(e) => setYear(parseInt(e.target.value))} />
                </fieldset>
            </section>
            <DateResultButton />
        </form>
    )
}

export default DateSettings;