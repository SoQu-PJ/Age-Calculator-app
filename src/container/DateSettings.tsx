const DateSettings = () => {
    return (
        <section className="date-settings">
            <label htmlFor="date">Day</label>
            <input type="date" name="date" id="date" />
            <label htmlFor="month">Month</label>
            <input type="month" name="month" id="month" />
            <label htmlFor="year">Year</label>
            <input type="date" name="year" id="year" />
        </section>
    )
}

export default DateSettings;