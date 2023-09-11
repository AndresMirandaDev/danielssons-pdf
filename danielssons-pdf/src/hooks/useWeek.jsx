import { useContext } from 'react';


export default function useWeek(date) {
  const currentDate = date;
  const year = new Date(currentDate.getFullYear(), 0, 1);
  const days = Math.floor((currentDate - year) / (24 * 60 * 60 * 1000));

  return Math.ceil((currentDate.getDay() + 1 + days) / 7);
}
