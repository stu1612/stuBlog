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
