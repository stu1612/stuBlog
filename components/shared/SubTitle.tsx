import { TitleProps } from "@/types";

export default function SubTitle({ title, style }: TitleProps) {
  return <h3 className={`h5-bold mb-5 ${style}`}>{title}</h3>;
}
