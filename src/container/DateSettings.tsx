const DateSettings = () => {
    return (
        <section className="date-settings">
            <label htmlFor="days">Day</label>
            <input type="number" name="days" id="days" />

            <label htmlFor="months">Month</label>
            <input type="number" name="months" id="months" />

            <label htmlFor="years">Year</label>
            <input type="number" name="years" id="years" />
        </section>
    )
}

export default DateSettings;