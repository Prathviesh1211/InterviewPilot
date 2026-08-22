import RegisterForm from "../../components/auth/RegisterForm";
import AuthLayout from "../../layouts/AuthLayout"
// import RegisterForm from "../components/auth/RegisterForm";

const Register = () => {
  return (
    <AuthLayout>
      <RegisterForm />
    </AuthLayout>
  );
};

export default Register;