import nodemailer from 'nodemailer';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: path.join(__dirname, '../.env') });

console.log('SMTP_HOST:', process.env.SMTP_HOST);
console.log('SMTP_PORT:', process.env.SMTP_PORT);
console.log('SMTP_USER:', process.env.SMTP_USER);
console.log('SMTP_PASS:', process.env.SMTP_PASS ? '****' : '(없음)');

const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: parseInt(process.env.SMTP_PORT || '465'),
  secure: parseInt(process.env.SMTP_PORT || '465') === 465,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
  debug: true,
  logger: true,
});

console.log('\n--- SMTP 연결 테스트 중 ---');
transporter.verify((error, success) => {
  if (error) {
    console.log('\n❌ SMTP 연결 실패!');
    console.log('오류 코드:', error.code);
    console.log('오류 메시지:', error.message);
    if (error.response) console.log('서버 응답:', error.response);
  } else {
    console.log('\n✅ SMTP 연결 성공! 메일을 보낼 수 있습니다.');

    // 테스트 메일 발송
    transporter.sendMail({
      from: `"테스트" <${process.env.SMTP_USER}>`,
      to: 'newgenes@newgenesci.com',
      subject: '[테스트] SMTP 연결 테스트',
      text: '이 메일은 SMTP 연결 테스트입니다.',
    }, (err, info) => {
      if (err) {
        console.log('❌ 메일 전송 실패:', err.message);
      } else {
        console.log('✅ 메일 전송 성공!', info.response);
      }
    });
  }
});
