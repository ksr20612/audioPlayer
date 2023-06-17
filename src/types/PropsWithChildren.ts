import { ReactNode } from "react";

export type PropsWithChildren<T extends {[key: keyof any]: any}> = T & {
    children: ReactNode;
}