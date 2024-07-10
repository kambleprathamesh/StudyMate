import Template from "../components/Common/Template";
import signUp from "../assets/Images/signup.jpeg";
function SignUp() {
  return (
    <Template
      heading={"Join the millions learning to code with StudyNotion for free"}
      desc1={"Build skills for today, tomorrow, and beyond."}
      desc2={" Education to future-proof your career."}
      img={signUp}
      formType={"signUp"}
    />
  );
}

export default SignUp;
