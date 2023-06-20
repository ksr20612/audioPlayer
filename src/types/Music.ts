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
export interface GetMusicURLRequest {
    musicId: string;
}