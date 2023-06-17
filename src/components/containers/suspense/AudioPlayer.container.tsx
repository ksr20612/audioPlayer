import Boundary from 'components/Boundary';
import { useState, useEffect, useRef, useCallback, useMemo, ReactElement, Suspense } from 'react';
import styled, { css } from 'styled-components';
import AudioPlayerContainer from '../AudioPlayer.container';

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

const Wrapper = styled.article`
    width: 100%;
    height: 20%;
    min-height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    box-shadow: 8px 16px 16px hsl(0deg 0% 0% / 0.25);
    border-radius: 8px;
`

export default AudioPlayerSuspenseContainer;