import DateButton from "../assets/images/icon-arrow.svg";

const DateResultButton = () => {
    return (
        <section className="date-button-section">
            <hr />
            <button id="date-result-button"><img src={DateButton} alt="Button showing the result" /></button>
        </section>
    )
}

export default DateResultButton;