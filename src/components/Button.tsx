import type { ComponentPropsWithoutRef } from "react";

type ButtonProps = {
    variant?: 'button';
    onClick?: ()=>void;
} & ComponentPropsWithoutRef<'button'>;

type AnchorProps = {
    variant?: 'anchor';
    href?: string
} & ComponentPropsWithoutRef<'a'>;
export default function Button(props: AnchorProps | ButtonProps ){
    if(props.variant === 'anchor'){
         return <a {...props}></a>
    }
   
    return<button {...props}></button>
}