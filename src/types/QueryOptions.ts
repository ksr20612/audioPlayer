import { UseQueryOptions } from "@tanstack/react-query";
import { AxiosError, AxiosResponse } from "axios";

export type QueryOptions<R = any> = UseQueryOptions<AxiosResponse<R>, AxiosError, R>