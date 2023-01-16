import { FormElementComponent } from "./types";

export const FormElement: FormElementComponent<string> = ({
  form: { register },
  name
}) => {
  return <input {...register(name)} />;
};
