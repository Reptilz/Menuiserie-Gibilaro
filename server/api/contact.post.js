import nodemailer from "nodemailer";
import validator from "validator";
const config = useRuntimeConfig();

const transporter = nodemailer.createTransport({
  service: "Gmail",
  host: config.MAILHOST,
  port: config.MAILPORT,
  auth: {
    user: config.MAILUSER,
    pass: config.MAILPASSWORD,
  },
});

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event);

    await isValid(body)
      .then(async (data) => {
        const mail = await transporter.sendMail({
          from: `"Formulaire de contact - ${data.name}"`,
          to: config.CONTACTMAIL,
          subject: data.subject,
          text: data.message,
          html: `
          <div style="max-width: 600px; margin: auto; background-color: #ffffff; box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.1); padding: 20px; font-family: 'Helvetica Neue', Arial, sans-serif;">
            <h1 style="color: #4d4d4d; text-align: center; margin-bottom: 20px; font-weight: 300;">Formulaire de contact</h1>
            <div style="margin-bottom: 25px;">
                <p style="font-weight: bold; color: #4d4d4d;">Sujet:</p>
                <p style="color: #6a6a6a;">${data.subject}</p>
            </div>
            <div style="margin-bottom: 25px;">
                <p style="font-weight: bold; color: #4d4d4d;">Nom:</p>
                <p style="color: #6a6a6a;">${data.name}</p>
            </div>
            <div style="margin-bottom: 25px;">
                <p style="font-weight: bold; color: #4d4d4d;">E-mail:</p>
                <p style="color: #6a6a6a;">${data.email}</p>
            </div>
            <div style="margin-bottom: 25px;">
            <p style="font-weight: bold; color: #4d4d4d;">Téléphone:</p>
                <p style="color: #6a6a6a;">${data.phone}</p>
            </div>
            <div>
                <p style="font-weight: bold; color: #4d4d4d;">Message:</p>
                <p style="padding: 10px; background-color: #f2f2f2; border-radius: 5px; color: #6a6a6a;">${data.message}</p>
                </div>
        </div>
                    `,
        });

        console.log("Message sent: %s", mail.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(mail));
        return Promise.resolve();
      })
      .catch((errors) => {
        return Promise.reject(errors);
      });

    return "Le message a bien été envoyé !";
  } catch (error) {
    sendError(event, createError({ statusCode: 400, statusMessage: error }));
  }
});

async function isValid(body) {
  const errors = [];

  if (validator.isEmpty(body.email || ""))
    errors.push({
      field: "email",
      error: "Field is required.",
    });
  if (validator.isEmpty(body.name || ""))
    errors.push({ field: "name", error: "Field is required." });
  if (validator.isEmpty(body.phone || ""))
    errors.push({ field: "phone", error: "Field is required." });
  if (validator.isEmpty(body.subject || ""))
    errors.push({ field: "subject", error: "Field is required." });
  if (validator.isEmpty(body.message || ""))
    errors.push({ field: "message", error: "Field is required." });
  if (!validator.isEmail(body.email || ""))
    errors.push({ field: "email", error: "Field should be a valid email." });

  if (errors.length > 0) {
    return Promise.reject(errors);
  } else {
    return Promise.resolve({
      email: validator.normalizeEmail(body.email),
      subject: validator.escape(body.subject),
      phone: validator.escape(body.phone),
      name: validator.escape(body.name),
      message: validator.escape(body.message),
    });
  }
}
