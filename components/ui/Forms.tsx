'use client';
import React, { FC, useState } from 'react';
import axios from 'axios';

import * as Yup from 'yup';
import { ErrorMessage, Field, Form, FormikHelpers, FormikProvider, useFormik } from 'formik';
import TextMask from 'react-text-mask';
import { parsePhoneNumberFromString, AsYouType, PhoneNumber } from 'libphonenumber-js';

import { CallbackFormDataTypes } from '@/types/types';

interface StatusInfoType {
  error: boolean;
  msg: string;
}

interface StatusType {
  submitted: boolean;
  submitting: boolean;
  info: StatusInfoType;
}

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .matches(/^([^0-9]*)$/, 'Имя не должно содержать цифры')
    .required('Обязательное поле'),
  email: Yup.string().email('Неверный формат email').required('Обязательное поле'),
  phone: Yup.string()
    .required('Обязательное поле')
    .test('phone', 'Неверный формат номера', (value) => {
      if (!value) return false;
      const phoneNumber = parsePhoneNumberFromString(value, 'KZ');
      return phoneNumber ? phoneNumber.isValid() : false;
    }),
  message: Yup.string(),
});

const normalizePhoneNumber = (value: string): string => {
  const asYouType = new AsYouType('KZ');
  asYouType.input(value);

  const phoneNumber: PhoneNumber | undefined = asYouType.getNumber();

  if (phoneNumber) {
    return phoneNumber.formatInternational();
  }

  return value; // Возвращаем оригинальное значение, если не удалось получить PhoneNumber
};

export const CallbackForm: FC = () => {
  const [status, setStatus] = useState<StatusType>({
    submitted: false,
    submitting: false,
    info: { error: false, msg: '' },
  });

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (
      values: CallbackFormDataTypes,
      actions: FormikHelpers<{ name: string; email: string; phone: string; message: string }>,
    ) => {
      // код для обработки отправки формы
      setStatus({
        submitted: false,
        submitting: true,
        info: { error: false, msg: '' },
      });
      try {
        // логика отправки данных на сервер
        const response = await axios.post('/api/callback', values);
        if (response.status === 200) {
          setStatus({
            submitted: true,
            submitting: false,
            info: { error: false, msg: 'Данные успешно отправлены' },
          });
          actions.resetForm({
            values: {
              name: '',
              email: '',
              phone: '',
              message: '',
            },
          });
        }
      } catch (error) {
        console.error(error);
        setStatus({
          submitted: true,
          submitting: false,
          info: { error: true, msg: 'Произошла ошибка при отправке данных' },
        });
      }
    },
  });

  return (
    <div>
      <FormikProvider value={formik}>
        <Form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-1">
              <label>
                Ф.И.О. <span className="text-red">*</span>
              </label>
              <Field
                type="text"
                name="name"
                id="name"
                className="input-style"
                placeholder="Введите ваше имя"
                autoComplete="on"
                required={true}
                value={formik.values.name || ''}
              />
              <ErrorMessage name="name" component="div" className="text-xs text-red" />
            </div>
            <div className="flex flex-col gap-1">
              <label>
                Ваша почта <span className="text-red">*</span>
              </label>
              <Field
                type="email"
                name="email"
                id="email"
                className="input-style"
                placeholder="Введите адрес почты"
                autoComplete="on"
                required={true}
                value={formik.values.email || ''}
              />
              <ErrorMessage name="email" component="div" className="text-xs text-red" />
            </div>
            <div className="flex flex-col gap-1">
              <label>
                Номер телефона <span className="text-red">*</span>
              </label>
              <Field name="phone">
                {({ field }: { field: any }) => (
                  <TextMask
                    {...field}
                    mask={[
                      '+',
                      '7',
                      ' ',
                      '(',
                      /[1-9]/,
                      /\d/,
                      /\d/,
                      ')',
                      ' ',
                      /\d/,
                      /\d/,
                      /\d/,
                      '-',
                      /\d/,
                      /\d/,
                      '-',
                      /\d/,
                      /\d/,
                    ]}
                    guide={false}
                    placeholder="+7 (700) 777-77-77"
                    type="tel"
                    id="phone"
                    autoComplete="on"
                    required={true}
                    value={formik.values.phone || ''}
                    onBlur={(e) => {
                      field.onBlur(e);
                      field.onChange({
                        target: {
                          name: 'phone',
                          value: normalizePhoneNumber(e.target.value),
                        },
                      });
                    }}
                    className="input-style"
                  />
                )}
              </Field>
              <ErrorMessage name="phone" component="div" className="text-xs text-red" />
            </div>
            <div className="flex flex-col gap-1">
              <label>Ваш комментарии</label>
              <Field
                as="textarea"
                type="text"
                name="message"
                id="message"
                className="input-style"
                placeholder="Ваш комментарии"
                value={formik.values.message || ''}
              />
            </div>
            <div>
              <span className="text-xs block">
                Нажимая на кнопку <strong>отправить</strong>, вы подтверждаете свое согласие с
                условиями использования и политикой конфиденциальности нашего сайта. Вы также
                соглашаетесь на обработку ваших персональных данных в соответствии с этими
                политиками.
              </span>
              <button
                type="submit"
                disabled={status.submitting}
                className="blue__btn float-right block text-center mt-3 disabled:bg-gray-dark disabled:text-white-dark">
                {status.submitting ? 'Отправка...' : status.submitted ? 'Отправлено' : 'Отправить'}
              </button>
            </div>
            {status.info.error === true && (
              <div className=" text-red text-sm">{status.info.msg}</div>
            )}
            {status.info.error === false && status.info.msg !== '' && (
              <div className=" text-green text-sm">{status.info.msg}</div>
            )}
          </div>
        </Form>
      </FormikProvider>
    </div>
  );
};
