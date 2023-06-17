import PlayButton from 'components/atoms/PlayButton';
import Title from 'components/atoms/Title';
import SliderWithClock from 'components/molecules/SliderWithClock';
import { useState, useEffect, useRef, useCallback, useMemo, ReactElement, ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { AudioControls } from 'types/AudioControls';

interface AudioPlayerProps {
    audioTitle: ReactNode;
    audioId: string;
    controls: AudioControls;
};

const AudioPlayer = ({
    audioTitle,
    audioId,
    controls,
}: AudioPlayerProps): ReactElement => {

    const play = useCallback(() => {
        controls.play(audioId);
    }, []);

    return (
        <Wrapper>
            <PlayButton 
                isPlaying={controls.isPlaying} 
                handleClick={controls.isPlaying? controls.pause : play}
            />
            <Title styles={{ 
                minWidth: "20%",
                textOverflow: "ellipsis",
                display: "inline-block",
                verticalAlign: "middle",
                overflow: "hidden",
                whiteSpace: "nowrap",
                marginLeft: "10px"
            }}>{ audioTitle }</Title>
            <SliderWithClock 
                controls={controls} 
            />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 20px;
`

export default AudioPlayer;