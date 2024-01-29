import { CallbackForm, MyMotion, PageTitle } from '@/components';
import Link from 'next/link';
import React from 'react';

const contacts = () => {
  return (
    <MyMotion>
      <section className="container">
        <div className="page-container">
          <div>
            <PageTitle title={'Контакты'} />
          </div>
          <div className="pt-10 pb-7">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
              <div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <span className="block text-gray text-sm">Адрес</span>
                    <Link className="block mt-1" href="https://go.2gis.com/9mog7" target="_blank">
                      ул. Наурызбай Батыра 17/1, офис 209, этаж 2, Алматы, Казахстан
                    </Link>
                  </div>
                  <div>
                    <span className="block text-gray text-sm">Телефон</span>
                    <Link className="block mt-1" href="tel:+77089785838" target="_blank">
                      +7 (708) 978 5838
                    </Link>
                  </div>
                  <div>
                    <span className="block text-gray text-sm">Режим работы</span>
                    <p>ПН - ПТ: с 9:00 до 18:00</p>
                    <p>СБ - ВС: Выходные</p>
                  </div>
                  <div>
                    <span className="block text-gray text-sm">Почта</span>
                    <Link className="block mt-1" href="info@itdoc.kz" target="_blank">
                      info@itdoc.kz
                    </Link>
                  </div>
                </div>
                <div className="mt-5">
                  <h2 className="text-center">Нужна консультация?</h2>
                  <p className="mt-2 text-center">Остались вопросы? Задайте его в форме ниже:</p>
                  <div className="mt-5">
                    <CallbackForm />
                  </div>
                </div>
              </div>
              <div>
                <iframe
                  src="https://yandex.ru/map-widget/v1/?um=constructor%3Ac817dfc084e9a341863b7babb15c8fd20121c0d1a2a2e887c6577de3a1edc5c9&amp;source=constructor"
                  width="100%"
                  height="500"
                  frameBorder="0"
                  title="Карта Yandex"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </MyMotion>
  );
};

export default contacts;
