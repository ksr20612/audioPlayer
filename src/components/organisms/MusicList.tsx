import { Music as MusicType } from 'types/Music';
import { useState, useEffect, useRef, useCallback, useMemo, ReactElement, CSSProperties } from 'react';
import styled, { css } from 'styled-components';
import { FixedSizeList } from 'react-window';
import useGetElementSize from 'hooks/useGetElementSize';
import useGetWindowSize from 'hooks/useGetWindowSize';
import MusicRow from './MusicRow';

export interface MusicListProps {
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
                    <MusicRow 
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

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
`

export default MusicList;