import {
  useRef,
  type ComponentPropsWithoutRef,
  forwardRef,
  useImperativeHandle,
} from "react";

type FormProps = ComponentPropsWithoutRef<"form"> & {
  onSave: (value: unknown) => void;
}; //We get all the standard built in properties of form elemnt
type FormHandle = {
  clear: () => void;
};
const Form = forwardRef<FormHandle, FormProps >(function Form(
  { onSave, children, ...otherprops }: FormProps,
  ref,
) {
  const FormRef = useRef<HTMLFormElement>(null);
  useImperativeHandle(ref, () => {
    return {
      clear() {
        FormRef.current?.reset();
      },
    };
  });
  function handelSubmit(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    onSave(data);
    FormRef.current?.reset();
  }
  return (
    <form ref={FormRef} onSubmit={handelSubmit} {...otherprops}>
      {children}
    </form>
  );
});
export default Form;
