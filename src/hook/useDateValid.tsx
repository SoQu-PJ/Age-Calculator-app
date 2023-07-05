const useDateValid = (day: number, month: number, year: number): boolean => {
    const parsedDate = new Date(year, month - 1, day);
    return (
        parsedDate.getDate() === day &&
        parsedDate.getMonth() === month - 1 &&
        parsedDate.getFullYear() === year
    );
}

export default useDateValid;