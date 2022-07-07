import { subDays, format } from "date-fns";

const date = new Date(2022,6,7);
console.log(format(date,"yyyy/MM/dd"));
const red = subDays(date,30);
const rpta = format(red,"yyyy/MM/dd");
console.log(rpta)
