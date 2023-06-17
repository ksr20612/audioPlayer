import { UseQueryResult, useQuery } from "@tanstack/react-query"
import { AxiosError, AxiosResponse, CancelTokenSource } from "axios"
import { GetMusicURLRequest, MusicKeys, MusicList, MusicsURL, getMusicURL, getMusics } from "."
import { QueryOptions } from "types/QueryOptions";
import { sortItemsByDate } from "utils/sortItemsByDate";

// GET /musics
export const useMusicsQuery = (
    options?: QueryOptions<MusicList>
): UseQueryResult<MusicList, AxiosError> => {
    return useQuery({
        queryKey: MusicKeys.all,
        queryFn: () => getMusics(),
        select: data => ({
            ...data.data,
            items: sortItemsByDate(data.data.items, { order: "DESC" })
        }),
        suspense: true,
        staleTime: 5 * 60 * 1000,
        ...options,
    })
} 

// GET /musics/:musicId
export const useMusicsByMusicIdQuery = (
    param: GetMusicURLRequest,
    options?: QueryOptions<MusicsURL>,
) => {
    return useQuery({
        queryKey: MusicKeys.musicId(param.musicId),
        queryFn: () => getMusicURL(param),
        select: data => data.data,
        suspense: true,
        enabled: !!param.musicId,
        staleTime: 5 * 60 * 1000,
        ...options
    })
}