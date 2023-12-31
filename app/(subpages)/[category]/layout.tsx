import { ReactNode } from "react";

import { getCategoriesByDomain } from "@/services/category/category.service";

export const generateStaticParams = async () => {
  if (!process.env.NEXT_PUBLIC_DOMAIN_ID) {
    return [];
  }

  const categories = await getCategoriesByDomain(process.env.NEXT_PUBLIC_DOMAIN_ID);

  if (!categories) return [];

  return categories.map((category) => ({
    category: category.slug,
  }));
};

const Layout = ({ children }: { children: ReactNode }) => children;

export default Layout;
