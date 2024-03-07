// // api/sendEmail.ts

// import { NextApiRequest, NextApiResponse } from 'next';
// import nodemailer from 'nodemailer';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method === 'POST') {
//     const { name, email, message } = req.body;

//     // Create a transporter
//     const transporter = nodemailer.createTransport({
//       // Configure transporter with your email provider's SMTP settings
//       host: 'smtp.example.com',
//       port: 587,
//       secure: false, // true for 465, false for other ports
//       auth: {
//         user: 'your-email@example.com',
//         pass: 'your-email-password',
//       },
//     });

//     // Send mail with defined transport object
//     const info = await transporter.sendMail({
//       from: `"Your Website" <your-email@example.com>`,
//       to: 'support@set.com',
//       subject: 'New Contact Form Submission',
//       html: `
//         <p>Name: ${name}</p>
//         <p>Email: ${email}</p>
//         <p>Message: ${message}</p>
//       `,
//     });

//     console.log('Message sent: %s', info.messageId);

//     res.status(200).json({ message: 'Email sent successfully' });
//   } else {
//     res.status(405).json({ message: 'Method not allowed' });
//   }
// }
