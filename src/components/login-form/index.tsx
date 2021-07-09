import { Button, CardContent, Card } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import { Input } from "../fields/input";


export default observer(({ form, onSubmit }: any) => (
  <Card>
    <CardContent>
      <form onSubmit={onSubmit}>
        <Input field={form.$("email")} fullWidth/>
        <Input field={form.$("password")} fullWidth/>
        <Input field={form.$("passwordConfirm")} fullWidth/>

        <br />
        <Button type="submit" onClick={onSubmit}>
          Submit
        </Button>
        <Button type="button" onClick={form.onClear}>
          Clear
        </Button>
        <Button type="button" onClick={form.onReset}>
          Reset
        </Button>
      </form>
    </CardContent>
  </Card>
));
