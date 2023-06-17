import { useState, useEffect, useRef, useCallback, useMemo, ReactElement } from 'react';
import styled, { css } from 'styled-components';
import MusicListContainer from 'components/containers/suspense/MusicList.container';
import AudioPlayerContainer from 'components/containers/suspense/AudioPlayer.container';

interface ScreenProps {

};

const Screen = ({

}: ScreenProps): ReactElement => {

    return (
        <Wrapper>
            <h1>플레이리스트</h1>
            <AudioPlayerContainer />
            <MusicListContainer />
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    height: 100vh;
    padding: 3%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5%;
`

export default Screen;
