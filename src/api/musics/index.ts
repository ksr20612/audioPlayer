import { GetMusicURLRequest, MusicList, MusicsURL } from "types/Music";
import API from "utils/axios";

// key
export const MusicKeys = {
    all: ['music'] as const,
    musicId: (musicId: string) => [...MusicKeys.all, { musicId }] as const,
}

// GET /musics
export const getMusics = () => {
    return API().get<MusicList>(`/musics`);
}

// GET /musics/:musicId
export const getMusicURL = (
    { musicId }: GetMusicURLRequest,
) => {
    return API().get<MusicsURL>(`/musics/${musicId}`);
}