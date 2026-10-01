import type { ComponentPropsWithRef } from "react";

type InputProps = {
    label: string;
    id: string;
}& ComponentPropsWithRef<'input'>; 
export default function Input({label, id, name,  ...props}: InputProps) {
    return(
        <p>
            <label htmlFor={id}>{label}</label>
            <input name={name} id={id} type="text" {...props}></input>
        </p>
    )
}