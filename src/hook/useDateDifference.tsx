function useCalculateAge(startDate: Date): [number, number, number] {
    const today = new Date();
    const differenceInTime = today.getTime() - startDate.getTime();
    const years = Math.floor(differenceInTime / (1000 * 60 * 60 * 24 * 365));
    const months = Math.floor((differenceInTime % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24 * 30));
    const days = Math.floor(((differenceInTime % (1000 * 60 * 60 * 24 * 365)) % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));

    return [years, months, days];
}

// output how much days, months, years passed since your birthday
// const { days, months, years } = useDateDifference(startDate, date);

export default useCalculateAge;