import { FormControl, FormHelperText, InputLabel, Input as InputComponent } from "@material-ui/core";
import { observer } from "mobx-react-lite";
export const Input = observer(
  ({field, ...props}: any) => {
    return (
      <FormControl
        error={!!field.error}
        required={field.$rules.includes("required")}
        {...props} 
      >
        <InputLabel htmlFor={field.id}>{field.label}</InputLabel>
        <InputComponent {...field.bind()}/>
        <FormHelperText>{field.error}</FormHelperText>
      </FormControl>
    );
  }
);
