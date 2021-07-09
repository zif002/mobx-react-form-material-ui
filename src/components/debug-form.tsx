import MobxReactFormDevTools from "mobx-react-form-devtools";
import LoginForm from "./login-form/form";
/**
 * Registeration all forms
 */
MobxReactFormDevTools.register({
  LoginForm
});

export const DebugFormUi = () => {
  return <MobxReactFormDevTools.UI />;
};
