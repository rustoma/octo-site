import { NextRequest } from "next/server";

import { getArticles } from "@/services/article/article.service";
export const dynamic = "force-dynamic";

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const limit = searchParams.get("limit");
  const offset = searchParams.get("offset");
  const categoryId = searchParams.get("categoryId");

  if (!limit || !offset || !categoryId) throw new Error("Limit, categoryId or offset params are missing");

  const articles = await getArticles({ limit, offset, categoryId });

  return Response.json(articles);
};
