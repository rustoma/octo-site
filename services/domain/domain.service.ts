import { httpClient } from "@/features/http";
import { DOMAIN_ROUTES } from "@/services/domain/domain.routes";
import { Domain } from "@/services/domain/domain.types";

export const getDomain = async (id: string | number): Promise<Domain | null> => {
  const res = await httpClient.get(DOMAIN_ROUTES.single(id));
  if (!res.ok) {
    throw new Error(`${res.status} ${res.statusText}`);
  }
  return res.json();
};
