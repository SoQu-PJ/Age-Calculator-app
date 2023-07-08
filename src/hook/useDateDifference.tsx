import { DateDifference } from "../ts/interface/IDateDifference";


function useDateDifference(startDate: Date, endDate: Date): DateDifference {
    const timeDiff = Math.abs(endDate.getTime() - startDate.getTime());
    const days = Math.floor(timeDiff / (1000 * 3600 * 24));
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);

    return { days, months, years };
}

// output how much days, months, years passed since your birthday
// const { days, months, years } = useDateDifference(startDate, date);

export default useDateDifference;