import { SingleProductInterface } from '@/types/types';
import {
  AddItemToCart,
  AddItemToWishlist,
  OrderByOneClick,
  ProductImages,
  ProductProperties,
  Text,
} from '.';
import Link from 'next/link';

const SingleProduct = ({ product }: { product: SingleProductInterface | undefined }) => {
  if (product) {
    return (
      <div className="md:col-span-2">
        <div className="border-border-color border rounded-md p-3 flex flex-col justify-center md:flex-row gap-4">
          <div className="block pl-3 pr-3">
            <div className="md:inline-block flex flex-col items-center">
              {product.images.length === 0 ? (
                <div className="w-[400px] h-[400px] flex justify-center items-center bg-[#33333314] rounded-md">
                  <svg xmlns="http://www.w3.org/2000/svg" width="22" viewBox="0 0 384 512">
                    <path d="M320 464c8.8 0 16-7.2 16-16V160H256c-17.7 0-32-14.3-32-32V48H64c-8.8 0-16 7.2-16 16V448c0 8.8 7.2 16 16 16H320zM0 64C0 28.7 28.7 0 64 0H229.5c17 0 33.3 6.7 45.3 18.7l90.5 90.5c12 12 18.7 28.3 18.7 45.3V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V64z" />
                  </svg>
                </div>
              ) : (
                <ProductImages images={product.images} />
              )}
            </div>
          </div>
          <div className="pt-6 pb-6 pl-5 pr-5 flex-1 my__shadow rounded-md md:ml-4 ml-0">
            <div className="border-b-[1px] border-border-color pb-3">
              <h4 className="text-base mb-1">{product.full_name}</h4>
            </div>
            <div className="pt-4 pb-4 flex flex-col gap-3 items-center">
              <div className="text-black text-4xl font-medium mt-3 mb-3">
                {new Intl.NumberFormat('ru-RU').format(product.price2)} ₸
              </div>
              <div className="flex items-center justify-center gap-3">
                {String(product.quantity) !== '0' ? (
                  <>
                    <div>
                      <OrderByOneClick />
                    </div>
                    <div>
                      <AddItemToCart product={product} />
                    </div>
                    <div>
                      <AddItemToWishlist />
                    </div>
                  </>
                ) : (
                  <div className="flex flex-col items-center">
                    <div>
                      <Text className={'text-base text-red font-medium'}>
                        Извините, данный товар временно отсутствует на складе.
                      </Text>
                    </div>
                    <div className="mt-2 text-center">
                      <Text className={'text-sm'}>
                        Мы работаем над обновлением запасов. Если вы хотите узнать, когда товар
                        станет доступным, пожалуйста, оставьте свою заявку, и мы уведомим вас, как
                        только он появится в наличии.
                      </Text>
                    </div>
                    <div className="flex items-center justify-center gap-3 mt-3">
                      <button className="blue__btn ">Оставить заявку</button>
                      <AddItemToWishlist />
                    </div>
                  </div>
                )}
              </div>
              <div className="w-full mt-3">
                <ul className="flex flex-col gap-2">
                  <li className="flex items-center gap-2 pt-1 pb-1">
                    {String(product.quantity) !== '0' ? (
                      <svg
                        className="fill-green"
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        width="16"
                        viewBox="0 0 512 512">
                        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z" />
                      </svg>
                    ) : (
                      <svg
                        className="fill-red"
                        xmlns="http://www.w3.org/2000/svg"
                        height="16"
                        width="16"
                        viewBox="0 0 512 512">
                        <path d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM175 175c-9.4 9.4-9.4 24.6 0 33.9l47 47-47 47c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l47-47 47 47c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-47-47 47-47c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-47 47-47-47c-9.4-9.4-24.6-9.4-33.9 0z" />
                      </svg>
                    )}
                    <Text className={'text-base'}>
                      {String(product.quantity) !== '0' ? 'Есть в наличии' : 'Нет в наличии'}
                    </Text>
                  </li>
                  <li className="flex items-center gap-2 pt-1 pb-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      width="14"
                      viewBox="0 0 448 512">
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                    </svg>
                    <Text className={'text-base'}>Производитель: {product.brand}</Text>
                  </li>
                  <li className="flex items-center gap-2 pt-1 pb-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      width="14"
                      viewBox="0 0 448 512">
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                    </svg>
                    <Text className={'text-base'}>Артикул: {product.article}</Text>
                  </li>
                  <li className="flex items-center gap-2 pt-1 pb-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="16"
                      width="14"
                      viewBox="0 0 448 512">
                      <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
                    </svg>
                    <Text className={'text-base'}>Гарантия: {product.warranty}</Text>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="p-3 mt-6">
          <ProductProperties properties={product.properties} description={product.detailtext} />
        </div>
      </div>
    );
  } else {
    <div>Товар не найден</div>;
  }
};

export default SingleProduct;
