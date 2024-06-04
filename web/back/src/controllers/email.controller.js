const { createTransport, createTestAccount } = require("nodemailer");
const { google } = require("googleapis");
require("dotenv").config();

const twoFactorAuth = async (req, res) => {
  const { code, email: emailDaPessoaQueVaiReceber } = req.body;

  console.log(req.body);
  const clientId = process.env.CLIENT_ID;
  const secret = process.env.SECRET_GOOGLE;
  const token = process.env.TOKEN;

  const redirectUrl = "https://developers.google.com/oauthplayground";

  try {
    // const oAuth2Client = new google.auth.OAuth2(clientId, secret, redirectUrl);

    // oAuth2Client.setCredentials({ refresh_token: token });

    // const accessToken = await oAuth2Client.getAccessToken();

    const testAccount = await createTestAccount();

    let transport = createTransport({
      host: "smtp.ethereal.email",
      port: 587,
      auth: {
        user: "madyson.rice19@ethereal.email", // generated ethereal user
        pass: "4MEeVBW5zSFNABstEF", // generated ethereal password
      },
    });
    // const transport = createTransport({
    //   service: "gmail",
    //   auth: {
    //     type: "OAuth2",
    //     user: "lucas.camachofilho@gmail.com",
    //     clientId: clientId,
    //     clientSecret: secret,
    //     refreshToken: token,
    //     accessToken,
    //   },
    // });

    const responseSendEmail = await transport.sendMail({
      from: "madyson.rice19@ethereal.email",
      to: emailDaPessoaQueVaiReceber,
      subject: "Assunto",
      html: `<div> <p>CONFIRME O CODIGO AGORA SENAO SEU PC VAI DESLIGA ${code}</p></div>`,
    });

    console.log("Message sent: %s", responseSendEmail.messageId);

    return res.status(200).json({
      message: "Email enviado com sucesso",
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ erro: "Erro ao enviar email" });
  }
};

module.exports = {
  twoFactorAuth,
};
