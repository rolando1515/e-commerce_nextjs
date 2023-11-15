"use client";
import { ComponentProps } from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
//import { Children, use, ComponentProps as useFormStatus } from "react";

type FormSubmitButtonProps = ComponentProps<"button"> & {
    children: React.ReactNode,
    className?: string,

} & ComponentProps <"button">;   

export default function FormSubmitButton( 
    {children,className,...props}: FormSubmitButtonProps
) {
    const {pending}= useFormStatus();
    return (
        <button
        {...props}
        className={'btn btn-primary w-full ${className}'}
        type="submit"
        disabled={pending}
        >
        {pending && <span className="loading-spinner loading"/>}    
        {children}</button>
    )
}
