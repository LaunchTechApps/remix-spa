import { Api } from "@/api/client.g";
import { environment } from "@/environment";

const apiClient = new Api({
   baseUrl: environment.apiBaseUrl,
});

export const { api } = apiClient;
