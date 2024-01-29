import { CartProductInterface, CategoryInterface, FetchCategory } from '@/types/types';
import { transliterate } from 'transliteration';
import convert from 'url-slug';

// Build hierarchy category function
export const buildCategoryHierarchy = (items: FetchCategory[]): CategoryInterface[] => {
  const categoryMap = new Map();

  // Создаем новые объекты категорий с обновленными свойствами и сохраняем их в Map с использованием id в качестве ключа
  const updatedCategories = items.map((category) => {
    // eslint-disable-next-line no-unused-vars
    const { id, name, left, right, level, currenttime } = category;
    return {
      ...category,
      children: [],
    };
  });

  // Сохраняем новые объекты категорий в Map с использованием id в качестве ключа
  updatedCategories.forEach((category) => {
    categoryMap.set(category.id, category);
  });

  // Строим иерархию, добавляя подкатегории в соответствующие родительские категории
  updatedCategories.forEach((category) => {
    const parentCategory = getParentCategory(categoryMap, category);
    if (parentCategory) {
      parentCategory.children.push(category);
    }
  });

  // Возвращаем корневые категории, у которых уровень равен 1
  const rootCategories = Array.from(categoryMap.values()).filter(
    (category) => category.level === 1,
  );
  return rootCategories;
};

// Вспомогательная функция для определения родительской категории
const getParentCategory = (
  categoryMap: Map<number, CategoryInterface>,
  category: FetchCategory,
): CategoryInterface | null => {
  for (const [id, parentCategory] of categoryMap) {
    if (
      category.left > parentCategory.left &&
      category.right < parentCategory.right &&
      category.level - 1 === parentCategory.level
    ) {
      return parentCategory;
    }
  }
  return null;
};

export const sumBy = (arr: number[]) => arr.reduce((prev: number, cur: number) => prev + cur, 0);

// Делаем новый url для используя имя товара или категории
export const newUrl = (name: string) => {
  const transliterateUrl: string = transliterate(name);
  const urlSlug: string = convert(transliterateUrl);
  return urlSlug;
};
