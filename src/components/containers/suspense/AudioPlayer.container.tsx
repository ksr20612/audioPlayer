import Boundary from 'components/Boundary';
import { useState, useEffect, useRef, useCallback, useMemo, ReactElement, Suspense } from 'react';
import styled, { css } from 'styled-components';
import AudioPlayerContainer from '../AudioPlayer.container';
import { AudioControls } from 'types/AudioControls';

interface AudioPlayerSuspenseContainerProps {

};

const AudioPlayerSuspenseContainer = ({

}: AudioPlayerSuspenseContainerProps): ReactElement => {

    return (
        <Wrapper>
            <Boundary>
                <AudioPlayerContainer />
            </Boundary>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    height: 20%;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid ${({theme}) => theme.color.main_text};
`

export default AudioPlayerSuspenseContainer;