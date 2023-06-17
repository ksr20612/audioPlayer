import { SyntheticEvent } from "react";

export type EventObject<T = HTMLElement> = React.SyntheticEvent<T>;
export type EventFunc<T = HTMLElement> = (e: EventObject<T>) => void;