import Form from "./components/login-form";
import FormModel from "./components/login-form/form";
import { FormEvent, useState } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import axios from "axios";
import { DebugFormUi } from "./components/debug-form";
import {Container} from "@material-ui/core"
type Values = {
  email: string;
  password: string;
  confirmPassowrd: string;
};
const sendServer = (data: Values) =>
  axios.post("https://jsonplaceholder.typicode.com/users", data);

export default function App() {
  const [loading, setLoading] = useState(false);
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { isValid } = await FormModel.validate({ showErrors: true });
    if (!isValid) {
      return;
    }
    setLoading(true);
    try {
      const dataSend = FormModel.values();
      const { data } = await sendServer(dataSend);
      alert(JSON.stringify(data));
    } catch (err) {
      FormModel.invalidate("Errors from server");
    } finally {
      setLoading(false);
    }
  };
  return (
    <div className="App">
      <Container maxWidth="sm">
      <DebugFormUi />
      <Form form={FormModel} onSubmit={onSubmit} />
      {loading && (
        <Loader
          type="Puff"
          color="#00BFFF"
          height={100}
          width={100}
          timeout={3000} //3 secs
        />
      )}
      </Container>
    </div>
  );
}
