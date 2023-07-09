import { IDateResult } from "../ts/interface/IDateResult";

const DateResult = ({ calculatedDay, calculatedMonth, calculatedYear }: IDateResult) => {
    return (
        <section className='date-result'>
            <p id="year" className="date"><span className="cal-result">{calculatedYear === null ? "--" : calculatedYear}</span> years</p>
            <p id="month" className="date"><span className="cal-result">{calculatedMonth === null ? "--" : calculatedMonth}</span> months</p>
            <p id="day" className="date"><span className="cal-result">{calculatedDay === null ? "--" : calculatedDay}</span> days</p>
        </section>
    )
}

export default DateResult;