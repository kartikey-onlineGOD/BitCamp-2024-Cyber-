const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;

const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:3000", // Adjust this to match your React app's URL
  })
);

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Email transport configuration
let transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  secure: false, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Function to send emails
async function sendEmail(recipient, content) {
  await transporter.sendMail({
    from: `"Your Name" <${process.env.EMAIL_USER}>`, // Sender address
    to: recipient, // List of receivers
    subject: "Hello ✔", // Subject line
    text: content, // Plain text body
    html: `<strong>${content}</strong>`, // HTML body
  });
}

// Route to handle POST requests
app.post("/submit-email", async (req, res) => {
  const { email } = req.body;
  try {
    await sendEmail(email, "Thank you for registering!");
    res.json({ message: "Confirmation email sent!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
