import { Music as MusicType } from 'api/musics';
import { useMusicsByMusicIdQuery } from 'api/musics/queries';
import Music from 'components/molecules/Music';
import { useState, useEffect, useRef, useCallback, useMemo, ReactElement, CSSProperties } from 'react';
import styled, { css } from 'styled-components';
import { FixedSizeList } from 'react-window';
import useGetElementSize from 'hooks/useGetElementSize';
import React from 'react';
import useGetWindowSize from 'hooks/useGetWindowSize';

interface MusicListProps {
    musicList: MusicType[];
    handleClick: (audioId: MusicType["id"], audioTitle: MusicType["title"]) => void; 
    audioIdSelected: MusicType["id"];
    isPlaying: boolean;
};

const MusicList = ({
    musicList,
    handleClick,
    audioIdSelected,
    isPlaying
}: MusicListProps): ReactElement => {

    const { size: triggerSizeChange } = useGetWindowSize();
    const { targetRef, size } = useGetElementSize<HTMLDivElement>({ trigger: triggerSizeChange });

    return (
        <Wrapper ref={targetRef}>
            <FixedSizeList
                key="musicList"
                height={size.height}
                width={size.width}
                itemSize={100}
                itemCount={musicList.length}
            >
                {({ index, style }) => 
                    <Row 
                        key={index}
                        index={index} 
                        data={musicList[index]} 
                        isPlaying={isPlaying}
                        style={style} 
                        audioIdSelected={audioIdSelected} 
                        handleClick={handleClick}
                    />}
            </FixedSizeList>
        </Wrapper>
    );
};

const Row = React.memo(({
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
});

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
`

export default MusicList;