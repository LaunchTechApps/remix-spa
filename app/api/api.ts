import { Api } from "@/api/client.g";
import { environment } from "@/environment";

const apiClient = new Api({
   baseUrl: environment.apiBaseUrl,
});

async function exampleApi() {
   const response = await api.isActive(
      { type: "refresh" },
      {
         headers: {
            "x-cur-access": "{{accessToken}}",
            "x-cur-refresh": "{{refreshToken}}",
         },
      },
   );
   const result = response.data.message;
   console.log("isActive result:", result);
}

export const { api } = apiClient;
