import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function CallbackFormApi(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, phone, message } = req.body;

  // Создание транспорта Nodemailer
  const transporter = nodemailer.createTransport({
    service: process.env.SERVICE,
    auth: {
      user: process.env.EMAIL,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    const mailOptionsToMe = {
      from: process.env.EMAIL,
      to: process.env.EMAIL,
      subject: `Новая заявка с сайта SQLSERVER`,
      html: `
          <style>
          p {
            margin: 0;
            padding: 0;
          }
          body {
            font-family: Arial, sans-serif;
          }
          ul {
            padding: 0;
          }
          li {
            margin: 5px 0;
          }
        </style>
        <div style="display: flex; justify-content: center">
          <div style="font-size: 20px; width: 450px">
            <div style="margin-bottom: 2rem">
              <h1 style="font-weight: bold; text-align: center">Новая заявка</h1>
            </div>
            <div
              style="
                border: 1px solid #e2e8f0;
                border-radius: 8px;
                padding: 1rem;
                box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
              ">
              <div style="margin-bottom: 1.5rem">
                <div
                  style="
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 15px;
                    flex-wrap: wrap;
                  ">
                  <p style="font-size: 14px; white-space: nowrap">Имя:</p>
                  <p style="font-size: 14px; font-weight: bold">${name}</p>
                </div>
              </div>
              <div style="margin-bottom: 1.5rem">
                <div
                  style="
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 15px;
                    flex-wrap: wrap;
                  ">
                  <p style="font-size: 14px; white-space: nowrap">Почта:</p>
                  <p style="font-size: 14px; font-weight: bold">${email}</p>
                </div>
              </div>
              <div style="margin-bottom: 1.5rem">
                <div
                  style="
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 15px;
                    flex-wrap: wrap;
                  ">
                  <p style="font-size: 14px; white-space: nowrap">Номер телефона</p>
                  <p style="font-size: 14px; font-weight: bold">${phone}</p>
                </div>
              </div>
              ${
                message
                  ? `
              <div style="margin-bottom: 1.5rem">
                <div
                  style="
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    gap: 15px;
                    flex-wrap: wrap;
                  ">
                  <p style="font-size: 14px; white-space: nowrap">Сообщение:</p>
                  <p style="font-size: 13px; font-weight: bold">${message}</p>
                </div>
              </div>
              `
                  : ''
              }
            </div>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptionsToMe, (error, info) => {
      if (error) {
        console.error('Ошибка при отправке письма:', error);
        res.status(500).send('Произошла ошибка при отправке данных');
        res.end();
      } else {
        console.log('Server Данные успешно отправлены');
        res.status(200).send('Данные успешно отправлены');
        res.end();
      }
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Произошла ошибка при отправке данных' });
    res.end();
  }
}
