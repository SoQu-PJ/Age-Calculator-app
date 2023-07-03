import DateResultButton from "./DateResultButton";
import { IDateSettings } from "../ts/interface/IDateSettings";

const DateSettings = ({
    day,
    month,
    year,
    setDay,
    setMonth,
    setYear
}: IDateSettings) => {
    const date = new Date();

    const handleSubmit = (e: { preventDefault: () => void; }) => {
        e.preventDefault();

    }

    return (
        <form onSubmit={handleSubmit}>
            <section className="date-settings">
                <fieldset className="data-fieldset">
                    <label htmlFor="days">Day</label>
                    <input type="number" name="days" id="days" placeholder="DD" min={1} max={31} value={day} onChange={(e) => setDay(parseInt(e.target.value))} />
                </fieldset>
                <fieldset className="data-fieldset">
                    <label htmlFor="months">Month</label>
                    <input type="number" name="months" id="months" placeholder="MM" min={1} max={12} value={month} onChange={(e) => setMonth(parseInt(e.target.value))} />
                </fieldset>
                <fieldset className="data-fieldset">
                    <label htmlFor="years">Year</label>
                    <input type="number" name="years" id="years" placeholder="YYYY" min={1} max={date.getFullYear()} value={year} onChange={(e) => setYear(parseInt(e.target.value))} />
                </fieldset>
            </section>
            <DateResultButton />
        </form>
    )
}

export default DateSettings;