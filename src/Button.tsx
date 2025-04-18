import { MouseEventHandler } from "react";

type ButtonProps = {
    isDisabled: boolean;
    onClick: MouseEventHandler<HTMLButtonElement>;
    label: string;
}

export const Button = ({ isDisabled, onClick, label }: ButtonProps) => {
    return <button disabled={isDisabled} onClick={onClick}>{label}</button>
}
