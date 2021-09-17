import { ButtonHTMLAttributes } from "react";
import "../style/button.scss";

type BtnProps = ButtonHTMLAttributes<HTMLButtonElement>;
export function Button(props: BtnProps) {
  return <button className="Button" {...props} />;
}
