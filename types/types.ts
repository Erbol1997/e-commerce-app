export interface CategoryInterface {
  id: number;
  category_id: number;
  name: string;
  left: number;
  right: number;
  level: number;
  currenttime?: Date;
  children: CategoryInterface[];
}

export interface FetchCategory {
  id: number;
  category_id: number;
  name: string;
  left: number;
  right: number;
  level: number;
  currenttime?: Date;
}

export interface CallbackFormDataTypes {
  name: string;
  email: string;
  phone: string;
  message?: string;
}

export interface AccordionDataType {
  title: string;
  subtitle: string;
}

export interface AccordionItemProps {
  isOpen: boolean;
  onClick: () => void;
  title: string;
  subtitle: string;
}

export interface ProductsInterface {
  price2: number;
  name: string;
  quantity: number | string;
  article: number;
  images: string[];
  isnew?: number;
  category: number;
  // full_name: string;
  // article_pn: string;
  // description?: string | null;
  // brand?: string;
  // weight?: number;
  // warranty?: string;
  // barcode?: string;
}

export interface ProductProperties {
  Код?: number;
  'Базовая единица'?: string;
  'Минимально необходимая мощность БП'?: string;
  Гарантия?: string;
  'Пропускная способность памяти'?: string;
  Штрихкод?: string;
  'Объём оперативной памяти'?: string;
  Поддержка?: string;
  Ширина?: string;
  Интерфейсы?: string;
  'Разрядность интерфейса памяти'?: string;
  'Тип памяти'?: string;
  'Частота графического процессора (МГц)'?: string;
  'Число процессоров CUDA'?: string;
  'Microsoft DirectX'?: string;
  OpenGL?: string;
  Бренд?: string;
  'В упаковке'?: number | string;
  'Код ТН ВЭД'?: string;
  Вес?: string;
  'Артикул-PartNumber'?: string;
  'Ссылка на сайт производителя'?: string;
}

export interface SingleProductInterface {
  price2: number;
  name: string;
  full_name: string;
  quantity: number | string;
  article: number;
  images: string[];
  isnew: number;
  category: number;
  brand: string;
  warranty?: string;
  article_pn?: string;
  description?: string | null;
  weight?: number;
  barcode?: string;
  detailtext?: string | null;
  properties?: ProductProperties;
}

export interface CartProductInterface extends SingleProductInterface {
  count: number;
}
