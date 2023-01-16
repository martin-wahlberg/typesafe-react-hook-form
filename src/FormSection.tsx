import { FormSectionComponent } from "./types";
import { FormElement } from "./FormElement";

// Dosen`t need to have all the fields as the "parent" form
export const FormSection: FormSectionComponent<{
  name1: string;
  name2: number;
}> = ({ form }) => {
  return (
    <div>
      {
        /**
         * If name is changed to name2 it will
         * give a type error since FormElement
         * is expecting a field with a string
         * value
         */
        <FormElement form={form} name="name1" />
      }
      <input {...form.register("name2")} />
    </div>
  );
};
