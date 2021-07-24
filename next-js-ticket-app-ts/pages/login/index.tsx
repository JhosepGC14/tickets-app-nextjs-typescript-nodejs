import LayoutAntd from "../../components/Shared/Layout";
import FormLogin from "../../components/Login/components/FormLogin";
import WithAuth from "../../HOC/WithAuth";

const LoginPage = () => {
  return (
    <LayoutAntd>
      <FormLogin />
    </LayoutAntd>
  );
};

export default WithAuth(LoginPage);
