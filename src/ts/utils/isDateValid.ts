function isDateValid(day: number | null, month: number | null, year: number | null): boolean {
    if (day === null || month === null || year === null) {
        return false;
    }

    const date = new Date(year, month - 1, day);

    if (
        date.getDate() === day &&
        date.getMonth() === month - 1 &&
        date.getFullYear() === year
    ) {
        return true;
    }

    return false;
}

export default isDateValid;