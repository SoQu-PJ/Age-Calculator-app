export interface IDateSettings {
    setCalculatedDay: React.Dispatch<React.SetStateAction<number | null>>
    setCalculatedMonth: React.Dispatch<React.SetStateAction<number | null>>;
    setCalculatedYear: React.Dispatch<React.SetStateAction<number | null>>;
}