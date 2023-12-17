export interface BasicPage {
  id: number;
  title: string;
  slug: string;
  body: string;
  domain: number;
  createdAt: string;
  updatedAt: string;
}

export interface BasicPageBySlugFilters {
  domainId?: string;
}
