import { IDateResult } from "../ts/interface/IDateResult";

const DateResult = ({ day, month, year }: IDateResult) => {
    return (
        <section className='date-result'>
            <p id="year" className="date"><span className="cal-result">{day}</span> years</p>
            <p id="month" className="date"><span className="cal-result">{month}</span> months</p>
            <p id="day" className="date"><span className="cal-result">{year}</span> days</p>
        </section>
    )
}

export default DateResult;