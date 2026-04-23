import type { VercelRequest, VercelResponse } from '@vercel/node';
import nodemailer from 'nodemailer';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, phone, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '465'),
    secure: parseInt(process.env.SMTP_PORT || '465') === 465,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"NewGenes Website" <${process.env.SMTP_USER}>`,
      to: 'newgenes@newgenesci.com',
      subject: `[견적문의] ${name} / ${phone}`,
      text: `성함/업체명: ${name}\n연락처: ${phone}\n이메일: ${email}\n\n문의내용:\n${message}`,
    });
    res.status(200).json({ success: true, message: '문의가 성공적으로 전송되었습니다.' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: '이메일 전송 중 오류가 발생했습니다.' });
  }
}
