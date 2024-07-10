import Template from "../components/Common/Template";
import loginImg from "../assets/Images/loginImg.jpeg";
function Login() {
  return (
    <Template
      heading={"Welcome Back"}
      desc1={"Build skills for today, tomorrow, and beyond."}
      desc2={"Education to future-proof your career."}
      img={loginImg}
      formType={"login"}
    />
  );
}

export default Login;
