import express from "express";
import { createServer as createViteServer } from "vite";
import nodemailer from "nodemailer";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(cors());
  app.use(express.json());

  // API route for inquiry
  app.post("/api/inquiry", async (req, res) => {
    const { name, phone, email, message } = req.body;

    // SMTP configuration
    // IMPORTANT: User needs to provide these environment variables in the Settings menu
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || "smtp.gmail.com",
      port: parseInt(process.env.SMTP_PORT || "587"),
      secure: parseInt(process.env.SMTP_PORT || "587") === 465,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `"NewGenes Website" <${process.env.SMTP_USER}>`,
      to: "newgenes@newgenesci.com",
      subject: `[견적문의] ${name} / ${phone}`,
      text: `성함/업체명: ${name}\n연락처: ${phone}\n이메일: ${email}\n\n문의내용:\n${message}`,
    };

    try {
      if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
        console.warn("SMTP credentials missing. Logging email content instead.");
        console.log("Email to: newgenes@newgenesci.com");
        console.log("Subject:", mailOptions.subject);
        console.log("Body:", mailOptions.text);
        
        // Return success for demo purposes if keys are missing, 
        // but warn the user in the response
        return res.status(200).json({ 
          success: true, 
          message: "SMTP 설정이 필요합니다. (로그 확인됨)" 
        });
      }

      await transporter.sendMail(mailOptions);
      res.status(200).json({ success: true, message: "문의가 성공적으로 전송되었습니다." });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ success: false, message: "이메일 전송 중 오류가 발생했습니다." });
    }
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
