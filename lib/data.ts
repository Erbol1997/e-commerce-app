import { buildCategoryHierarchy } from '@/utils/common';
import db from './db';
import {
  CategoryInterface,
  FetchCategory,
  ProductsInterface,
  SingleProductInterface,
} from '@/types/types';

export async function fetchCategories(): Promise<CategoryInterface[]> {
  let client;
  try {
    // Получение соединения из пула
    client = await db.connect();

    // Выполнение запроса
    const data: FetchCategory[] = await client.query<FetchCategory[]>(
      'SELECT * FROM categories ORDER BY name ASC',
    );

    // Постобработка данных
    const hierarchyCategories: CategoryInterface[] = buildCategoryHierarchy(data);

    return hierarchyCategories;
  } catch (error) {
    console.error('Ошибка базы данных категории: ', error);
    throw new Error('Ошибка загрузки категории');
  } finally {
    if (client) {
      client.done();
    }
  }
}

export async function fetchCategory(id: number): Promise<string> {
  let client;
  try {
    client = await db.connect();
    const data: { name: string }[] = await client.query<{ name: string }[]>(
      `SELECT name FROM categories WHERE category_id = ${id}`,
    );

    return data[0].name;
  } catch (error) {
    console.error('Ошибка базы данных категории: ', error);
    throw new Error('Ошибка загрузки категории');
  } finally {
    if (client) {
      client.done();
    }
  }
}

export async function fetchProducts(
  id: number,
  currentPage: number,
  itemsPerPage: number,
): Promise<ProductsInterface[]> {
  let client;
  const offset = (currentPage - 1) * itemsPerPage;
  try {
    client = await db.connect();
    const data: ProductsInterface[] = await client.query<ProductsInterface[]>(
      `SELECT price2, name, quantity, article, images, isnew  FROM products WHERE category = ${id} ORDER BY name ASC LIMIT ${itemsPerPage} OFFSET ${offset}`,
    );
    await new Promise((resolve) => setTimeout(resolve, 3000));
    return data;
  } catch (error) {
    console.error('Ошибка базы данных продукты: ', error);
    throw new Error('Ошибка загрузки товаров');
  } finally {
    if (client) {
      client.done();
    }
  }
}

export async function fetchProductsPage(id: number, itemsPerPage: number): Promise<number> {
  let client;
  try {
    client = await db.connect();

    const totalProductsCount = await client.query<{ count: number }[]>(
      `SELECT COUNT(*) FROM products WHERE category = ${id}`,
    );

    const totalPages: number = Math.ceil(Number(totalProductsCount[0].count) / itemsPerPage);

    return totalPages;
  } catch (error) {
    console.error('Ошибка загрузки количества продуктов: ', error);
    throw new Error('Ошибка загрузки количества продуктов');
  } finally {
    if (client) {
      client.done();
    }
  }
}

// Для страницы SHOP получение totalPage
export async function fetchAllProductsPage(itemsPerPage: number): Promise<number> {
  let client;
  try {
    client = await db.connect();
    const totalProductsCount = await client.query<{ count: number }[]>(
      `SELECT COUNT(*) FROM product_info`,
    );
    const totalPages: number = Math.ceil(Number(totalProductsCount[0].count) / itemsPerPage);

    return totalPages;
  } catch (error) {
    console.error('Ошибка загрузки количества продуктов: ', error);
    throw new Error('Ошибка загрузки количества продуктов');
  } finally {
    if (client) {
      client.done();
    }
  }
}

// Получение всех продуктов для страницы SHOP
export async function fetchAllProducts(
  currentPage: number,
  itemsPerPage: number,
): Promise<ProductsInterface[]> {
  let client;
  const offset = (currentPage - 1) * itemsPerPage;
  try {
    client = await db.connect();
    const data: ProductsInterface[] = await client.query<ProductsInterface[]>(
      `SELECT price2, name, quantity, article, images, isnew  FROM product_info LIMIT ${itemsPerPage} OFFSET ${offset}`,
    );
    // await new Promise((resolve) => setTimeout(resolve, 3000));
    return data;
  } catch (error) {
    console.error('Ошибка базы данных продукты: ', error);
    throw new Error('Ошибка загрузки продуктов');
  } finally {
    if (client) {
      client.done();
    }
  }
}

export async function fetchSingleProductInfo(
  id: number,
): Promise<SingleProductInterface | undefined> {
  let client;
  try {
    client = await db.connect();

    const data: SingleProductInterface[] = await client.query<SingleProductInterface[]>(
      `SELECT price2, name, full_name, quantity, article, images, isnew, category, brand, warranty, properties, detailText  FROM product_info WHERE article = ${id}`,
    );

    // await new Promise((resolve) => setTimeout(resolve, 3000));
    if (data.length === 0) {
      return undefined;
    } else {
      return data[0];
    }
  } catch (error) {
    console.error('Ошибка базы данных продукты: ', error);
    throw new Error('Ошибка загрузки продуктов');
  } finally {
    if (client) {
      client.done();
    }
  }
}
