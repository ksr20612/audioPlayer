import { Music } from "api/musics"

export const sortItemsByDate = (musics: Music[], config: SortConfig) => {
    return musics.sort((prev, cur) => {
        const prevDate = new Date(prev.public_date);
        const curDate = new Date(cur.public_date);
        if(config?.order === "ASC") {
            return prevDate.getTime() - curDate.getTime();
        }else {
            return curDate.getTime() - prevDate.getTime();
        }
    });
}

export interface SortConfig {
    order: "ASC" | "DESC",
}