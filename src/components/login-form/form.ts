import MobxReactForm from "mobx-react-form";
import dvr from "mobx-react-form/lib/validators/DVR";
import validatorjs from "validatorjs";

const plugins = {
  dvr: dvr(validatorjs)
};

const fields = [
  {
    name: "email",
    label: "Email",
    placeholder: "Insert Email",
    rules: "required|email|string|between:5,25",
    value: "s.jobs@apple.com"
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Insert Password",
    rules: "required|string|between:5,25"
  },
  {
    name: "passwordConfirm",
    label: "Password Confirmation",
    placeholder: "Confirm Password",
    rules: "required|string|same:password"
  }
];

export default new MobxReactForm({ fields }, { plugins });
