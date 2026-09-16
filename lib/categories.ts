import type { CategoryId } from "./types";

export interface Category {
  id: CategoryId;
  label: string;
  /** Original menu artwork from the source site (food photos, not brand marks). */
  image: string;
}

export const categories: Category[] = [
  {
    id: "discounts",
    label: "تخفیف دارهای شهریورماه",
    image:
      "https://sib360.com/Content/images/4372/Platform7Menu/crop/284740/pizza-usa.jpg",
  },
  {
    id: "italian",
    label: "پیتزا ایتالیایی",
    image:
      "https://sib360.com/Content/images/4372/shortcutTab/289951/%D9%BE%DB%8C%D8%AA%D8%B2%D8%A7%20%D8%A7%DB%8C%D8%AA%D8%A7%D9%84%DB%8C%D8%A7%DB%8C%DB%8C.jpg",
  },
  {
    id: "american",
    label: "پیتزا آمریکایی",
    image:
      "https://sib360.com/Content/images/4372/shortcutTab/289952/%D9%BE%DB%8C%D8%AA%D8%B2%D8%A7%20%D8%A2%D9%85%D8%B1%DB%8C%DA%A9%D8%A7%DB%8C%DB%8C.jpg",
  },
  {
    id: "combo",
    label: "اکو کمبو",
    image:
      "https://sib360.com/Content/images/4372/shortcutTab/289953/%D8%A7%DA%A9%D9%88%DA%A9%D9%85%D8%A8%D9%88.jpg",
  },
  {
    id: "stromboli",
    label: "استرامبولی",
    image:
      "https://sib360.com/Content/images/4372/shortcutTab/289954/%D8%A7%D8%B3%D8%AA%D8%B1%D8%A7%D9%85%D8%A8%D9%88%D9%84%DB%8C.jpg",
  },
  {
    id: "burger",
    label: "برگر",
    image:
      "https://sib360.com/Content/images/4372/shortcutTab/289955/%D8%A8%D8%B1%DA%AF%D8%B1.jpg",
  },
  {
    id: "diet",
    label: "ساندویچ گریل رژیمی",
    image:
      "https://sib360.com/Content/images/4372/shortcutTab/292117/%D9%85%D8%B1%D8%BA%20%D9%88%20%D8%A7%D8%B3%D9%81%D9%86%D8%A7%D8%AC%20%D8%B1%DA%98%DB%8C%D9%85%DB%8C.jpg",
  },
  {
    id: "sandwich",
    label: "ساندویچ",
    image:
      "https://sib360.com/Content/images/4372/shortcutTab/289956/%D8%B3%D8%A7%D9%86%D8%AF%D9%88%DB%8C%DA%86.jpg",
  },
  {
    id: "fried",
    label: "سوخاری",
    image:
      "https://sib360.com/Content/images/4372/shortcutTab/289957/%D8%B3%D9%88%D8%AE%D8%A7%D8%B1%DB%8C.jpg",
  },
  {
    id: "kids",
    label: "غذای کودک",
    image:
      "https://sib360.com/Content/images/4372/Platform7Menu/251973/kids.jpg",
  },
  {
    id: "mixmeal",
    label: "میکس میل",
    image:
      "https://sib360.com/Content/images/4372/Platform7Menu/251974/mixmeal.jpg",
  },
  {
    id: "lahmacun",
    label: "لاهماجون",
    image:
      "https://sib360.com/Content/images/4372/Platform7Menu/251975/lahmacune.jpg",
  },
  {
    id: "appetizer",
    label: "پیش غذا و سالاد",
    image:
      "https://sib360.com/Content/images/4372/Platform7Menu/251976/salad.jpg",
  },
  {
    id: "drink",
    label: "نوشیدنی",
    image:
      "https://sib360.com/Content/images/4372/Platform7Menu/251977/drink.jpg",
  },
  {
    id: "extra",
    label: "سرویس اضافه",
    image:
      "https://sib360.com/Content/images/4372/Platform7Menu/251978/extra.jpg",
  },
];

export const coupons = [
  {
    id: 1,
    title: "ارسال رایگان",
    description: "🛵ارسال رایگان 🛵برای تمامی سفارشات",
  },
  {
    id: 2,
    title: "'نوشابه قوطی کوکا کولا' رایگان",
    description:
      "🍺نوشابه قوطی کوکاکولا رایگان🍺با سفارش از منوی پیتزا ایتالیایی",
  },
  {
    id: 3,
    title: "%10 تخفیف اقلام منتخب",
    description: "💰10 درصد تخفیف اقلام منتخب💰تا سقف 150.000 تومان",
  },
];

/** Sample branches taken from the original directory page. */
export const branches = [
  {
    name: "شعبه اشرفی اصفهانی",
    address:
      "اشرفی اصفهانی جنوب به شمال، نبش ورودی اتوبان حکیم شرق، پلاک 199",
    city: "تهران",
    phone: "02141304000",
  },
  {
    name: "شعبه آزادگان",
    address:
      "میدان آزادگان، خیابان دنیامالی، بین دوازدهم و سیزدهم غربی، پلاک ۱۵۶",
    city: "تهران",
    phone: "02141304000",
  },
  {
    name: "شعبه ارم",
    address: "تهران، ارم، بلوار الهام، خیابان اصغرزاده",
    city: "تهران",
    phone: "02141304000",
  },
  {
    name: "شعبه تهرانپارس",
    address: "تهرانپارس، فلکه چهارم، بلوار خوشوقت، نبش 220 غربی",
    city: "تهران",
    phone: "02141304000",
  },
  {
    name: "شعبه کرج",
    address:
      "کرج، بلوار جمهوری، مابین میدان جمهوری و پل روحانی، نبش کوچه پاییز",
    city: "کرج",
    phone: "02141304000",
  },
  {
    name: "شعبه کیش",
    address: "کیش، بلوار تهران، خیابان کوشا، پلاک 59",
    city: "کیش",
    phone: "02141304000",
  },
];
