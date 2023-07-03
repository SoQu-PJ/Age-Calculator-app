export interface IDateSettings {
    day: number;
    month: number;
    year: number;
    setDay: React.Dispatch<React.SetStateAction<number>>;
    setMonth: React.Dispatch<React.SetStateAction<number>>;
    setYear: React.Dispatch<React.SetStateAction<number>>;
}