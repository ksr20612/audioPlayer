import { QueryClient } from "@tanstack/react-query";

const client = new QueryClient({
    defaultOptions: {
        queries: {
            retry: 0,
            refetchOnWindowFocus: false,
        },
    },
});

export default client;