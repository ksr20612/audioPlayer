import React, { CSSProperties } from "react";
import { Music as MusicType } from "types/Music";
import { useMusicsByMusicIdQuery } from "api/musics/queries";
import { MusicListProps } from "./MusicList";
import Music from "components/molecules/Music";

const MusicRow = ({
    data,
    isPlaying,
    audioIdSelected,
    handleClick,
    style
}: {
    index: number,
    data: MusicType,
    isPlaying: boolean | undefined,
    audioIdSelected: MusicListProps["audioIdSelected"],
    handleClick: MusicListProps["handleClick"],
    style: CSSProperties,
}) => {

    // prefetch
    useMusicsByMusicIdQuery({ musicId: data.id }, { suspense: false });

    return (
        <>
            {
                data && 
                <Music 
                    key={data.id}
                    id={data.id} 
                    title={data.title} 
                    moods={data.moods} 
                    genre={data.genre} 
                    publicDate={data.public_date} 
                    handleClick={() => handleClick(data.id, data.title)} 
                    isPlaying={data.id === audioIdSelected && !!isPlaying}
                    style={style}
                />
            }
        </>
    )
};

export default React.memo(MusicRow);