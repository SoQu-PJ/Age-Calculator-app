const DateSettings = () => {
    return (
        <form className="date-settings">
            <fieldset className="data-fieldset">
                <label htmlFor="days">Day</label>
                <input type="number" name="days" id="days" />
            </fieldset>

            <fieldset className="data-fieldset">
                <label htmlFor="months">Month</label>
                <input type="number" name="months" id="months" />
            </fieldset>

            <fieldset className="data-fieldset">
                <label htmlFor="years">Year</label>
                <input type="number" name="years" id="years" />
            </fieldset>
        </form>
    )
}

export default DateSettings;