export const ROUTES = {
  HOME: '/',
  SHOP: '/shop',
  NEWS: '/news',

  CART: '/cart',
  CHECKOUT: '/check-out',
  RESULT_URL: '/order-result',
  SUCCESS_URL: '/order-success',
  FAILURE_URL: '/order-failure',
  WISHLIST: '/wishlist',
  COMPARE: '/compare',

  PRODUCT: '/products/:id',
  CATEGORY: '/categories/category/:id',

  CONTACTS: '/contacts',
  ABOUT: '/about',
  TESTIMONIALS: '/testimonials',
  PRIVACYPOLICY: '/privacy-policy',
  POLICY: '/delivery-and-payment',
  WARRANTY: '/warranty',
  HELP: '/help',
  FAQ: '/faq',
};

export const footerLinks = [
  {
    id: 1,
    title: 'Компания',
    links: [
      { name: 'О компании', link: ROUTES.ABOUT },
      { name: 'Новости', link: ROUTES.NEWS },
      { name: 'Отзыв о магазине', link: ROUTES.TESTIMONIALS },
    ],
  },
  {
    id: 2,
    title: 'Информация',
    links: [
      { name: 'Гарантия на товар', link: ROUTES.POLICY },
      { name: 'Конфеденциальность', link: ROUTES.PRIVACYPOLICY },
      { name: 'Адрес магазина', link: ROUTES.CONTACTS },
    ],
  },
  {
    id: 3,
    title: 'Помощь',
    links: [
      { name: 'Как заказать', link: ROUTES.HELP },
      { name: 'Вопрос-ответ', link: ROUTES.FAQ },
      { name: 'Задать вопрос', link: ROUTES.CONTACTS },
    ],
  },
  {
    id: 4,
    title: 'Контакты',
    links: [
      { name: '+7 (708) 978 5838', link: 'tel:+77089785838' },
      { name: 'info@itdoc.kz', link: 'mailto:info@itdoc.kz' },
      {
        name: 'ул. Наурызбай Батыра 17/1, офис 209, этаж 2, Алматы, Казахстан',
        link: 'https://go.2gis.com/9mog7',
      },
    ],
  },
];
