import "./styles.css";
import { useForm } from "react-hook-form";
import { FormSection } from "./FormSection";
import { DevTool } from "@hookform/devtools";
export const MainForm: React.FC = () => {
  const form = useForm<{
    name1: string;
    name2: number;
    name3: string;
  }>();

  return (
    <div className="App">
      <FormSection form={form} />
      <DevTool placement="bottom-left" control={form.control} />
    </div>
  );
};
