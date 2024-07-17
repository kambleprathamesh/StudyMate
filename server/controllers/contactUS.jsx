const { ContactUS } = require("../Mail/template/contactUs");
const mailSender = require("../utils/mailSender");

exports.ContactUS = async (req, res) => {
  try {
    const { firstName, lastName, email, message, phoneNo, countryCode } =
      req.body;
    const emailResponse = await mailSender(
      email,
      "Your Data send successfully",
      ContactUS(firstName, lastName, email, message, phoneNo, countryCode)
    );

    console.log("Email Res ", emailRes)
    return res.json({
      success: true,
      message: "Email send successfully",
    });
  } catch (error) {
    console.log("Error", error);
    console.log("Error message :", error.message);
    return res.json({
      success: false,
      message: "Something went wrong...",
    });
  }
};
