import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export interface OramaResults {
    elapsed?: object,
    hits?: Array<object>,
    count?: number,
}

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: `http://localhost:3000`,
        prepareHeaders(headers) {
            headers.set("accept", "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7",)
            headers.set("accept-language", "it-IT,it;q=0.9,en-US;q=0.8,en;q=0.7,de;q=0.6,es;q=0.5",)
            headers.set("cache-control", "no-cache",)
            headers.set("pragma", "no-cache",)
            headers.set("sec-ch-ua", "\"Not/A)Brand\";v=\"99\", \"Google Chrome\";v=\"115\", \"Chromium\";v=\"115\"",)
            headers.set("sec-ch-ua-mobile", "?0",)
            headers.set("sec-ch-ua-platform", "\"macOS\"",)
            headers.set("sec-fetch-dest", "document",)
            headers.set("sec-fetch-mode", "navigate",)
            headers.set("sec-fetch-site", "none",)
            headers.set("sec-fetch-user", "?1",)
            headers.set("upgrade-insecure-requests", "1")
            return headers
        },
        //body: null,
        method: 'GET',
        mode: 'cors',
        credentials: 'omit',
    }),
    endpoints: (builder) => ({
        fetchResults: builder.query<OramaResults, string[]>({
            query: (provinceAndCity = ['', '']) => `/?SIGLAPROVINCIA=${provinceAndCity[0]}&DENOMINAZIONE_IT=${provinceAndCity[1]}`,
        }),
    }),
});

export const { useFetchResultsQuery } = apiSlice;

