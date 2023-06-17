import { Music as MusicType } from 'api/musics';
import { useMusicsByMusicIdQuery, useMusicsQuery } from 'api/musics/queries';
import Music from 'components/molecules/Music';
import { useState, useEffect, useRef, useCallback, useMemo, ReactElement, CSSProperties } from 'react';
import styled, { css } from 'styled-components';
import { FixedSizeList } from 'react-window';
import useGetElementSize from 'hooks/useGetElementSize';
import { useAppSelector } from 'stores/Store';

interface MusicListProps {
    musicList: MusicType[];
    handleClick: (audioId: MusicType["id"], audioTitle: MusicType["title"]) => void; 
    audioIdSelected: MusicType["id"];
};

const MusicList = ({
    musicList,
    handleClick,
    audioIdSelected,
}: MusicListProps): ReactElement => {

    const { targetRef, size } = useGetElementSize<HTMLDivElement>();
    const controls = useAppSelector(state => state.audio.audioControls);

    return (
        <Wrapper ref={targetRef}>
            <FixedSizeList
                height={size.height}
                width={size.width}
                itemSize={100}
                itemCount={musicList.length}
            >
                {({ index, style }) => 
                    <Row 
                        index={index} 
                        data={musicList[index]} 
                        isPlaying={controls?.isPlaying}
                        style={style} 
                        audioIdSelected={audioIdSelected} 
                        handleClick={handleClick}
                    />}
            </FixedSizeList>
        </Wrapper>
    );
};

const Row = ({
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

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
`

export default MusicList;