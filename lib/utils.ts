import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
// import { Children, ReactNode } from "react";

// interface EachProps {
//   render: (item: ReactNode, index: number) => ReactNode;
//   of: ReactNode[];
// }

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export const Each: React.FC<EachProps> = ({ render, of }) =>
//   Children.toArray(of.map((item, index) => render(item, index)));

export function truncateString(str: string, maxLength: number) {
  if (str.length > maxLength) {
    return str.substring(0, maxLength) + "...";
  }
  return str;
}

export function formatDate(dateString: string) {
  // Convert the input date string to a Date object
  const dateObject = new Date(dateString);

  // Format the date in the desired string format
  const formattedDate = `${ordinalSuffix(dateObject.getDate())} ${
    monthNames[dateObject.getMonth()]
  } ${dateObject.getFullYear()}`;

  return formattedDate;
}

// Helper function to add ordinal suffix to day
function ordinalSuffix(day: any) {
  const suffixes = ["th", "st", "nd", "rd"];
  const v = day % 100;
  return day + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
}

const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
