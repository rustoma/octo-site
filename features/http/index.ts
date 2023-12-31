type CustomHeaders = Record<string, unknown>;

type Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE";

interface Options {
  headers?: CustomHeaders;
  controller?: AbortController;
  requestTimeout?: number;
}

class HttpService {
  private readonly instance: (url: string, config: RequestInit) => Promise<Response>;

  private readonly baseUrl: string;

  private readonly defaultHeadersConfig = {
    "Content-Type": "application/json",
    "x-api-key": `Bearer ${process.env.API_KEY}`,
  };

  constructor(baseURL = `${process.env.NEXT_PUBLIC_BACKEND_HOST}/api/v1`) {
    this.baseUrl = baseURL;
    this.instance = (url: string, config: RequestInit) => fetch(this.baseUrl + url, { ...config });
  }

  get defaultHeaders() {
    return this.defaultHeadersConfig;
  }

  request(method: Method, url: string, body: Record<string, unknown> | null = null, options: Options = {}) {
    const { controller, requestTimeout } = options;

    const internalController = controller ?? new AbortController();
    const signal = internalController.signal;

    setTimeout(() => internalController.abort(), requestTimeout ?? 20000);

    const headers = { ...this.defaultHeaders, ...options.headers };

    const config: RequestInit = {
      method,
      headers,
      signal: signal,
    };

    if (body) {
      config.body = JSON.stringify(body);
    }

    return this.instance(url, config);
  }

  get(url: string, options: Options = {}) {
    return this.request("GET", url, null, options);
  }

  post(url: string, body: Record<string, unknown>, options: Options = {}) {
    return this.request("POST", url, body, options);
  }

  put(url: string, body: Record<string, unknown>, options: Options = {}) {
    return this.request("PUT", url, body, options);
  }

  delete(url: string, options: Record<string, unknown> = {}) {
    return this.request("DELETE", url, null, options);
  }
}

export const httpClient = new HttpService();
export const httpPublicClient = new HttpService("/api");
