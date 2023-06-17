import { Music } from "api/musics";
import { sortItemsByDate } from "./sortItemsByDate";
import mockData from "mockServer/mockData";

describe("[sortMusicsByDate]", () => {
    it("날짜 내림차순으로 정리한다", () => {
        const musics: Music[] = mockData.musics.slice(0, 3);
        const result = sortItemsByDate(musics, { order: "DESC" });
        expect(result).toStrictEqual([
            {
                id: 'u8byBWqFQw',
                title: 'Guest',
                moods: ['놀라운', '흥겨운'],
                genre: 'EDM',
                public_date: '2021-11-22T17:56:55.311551',
                url: 'https://cdn.pozalabs.com/recruit/musics/51.mp3',
            },
            {
                id: 'av3Xmt7DZ9',
                title: 'Freedom',
                moods: ['활기찬'],
                genre: '재즈',
                public_date: '2021-11-19T17:56:55.311551',
                url: 'https://cdn.pozalabs.com/recruit/musics/0.mp3',
            },
            {
                id: 'y9aGFC3qf0',
                title: 'Week',
                moods: ['즐거운', '행복한'],
                genre: '재즈',
                public_date: '2021-11-03T17:56:55.311551',
                url: 'https://cdn.pozalabs.com/recruit/musics/2.mp3',
            },
        ]);
    })
})

