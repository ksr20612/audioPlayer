import { CancelTokenSource } from "axios";
import API from "utils/axios";

// key
export const MusicKeys = {
    all: ['music'] as const,
    musicId: (musicId: string) => [...MusicKeys.all, { musicId }] as const,
}

export interface Music {
    id: string;
    title: string;
    moods: string[];
    genre: string;
    public_date: string;
}
export interface MusicList {
    total: number;
    items: Music[];
}
export interface MusicsURL {
    url: string;
}

// GET /musics
export const getMusics = () => {
    return API().get<MusicList>(`/musics`);
}

// GET /musics/:musicId
export interface GetMusicURLRequest {
    musicId: string;
}
export const getMusicURL = (
    { musicId }: GetMusicURLRequest,
) => {
    return API().get<MusicsURL>(`/musics/${musicId}`);
}