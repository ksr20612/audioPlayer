import LottiePlayer from 'components/LottiePlayer';
import React, { ReactElement, useState, useEffect, useCallback, useRef } from 'react';
import styled, { css } from 'styled-components';
import LottieLoadMusic from 'assets/lottie/load_music.json';

interface PlayerScreenProps {
    isLoading: boolean
}

const PlayerScreen = ({
    isLoading
}: PlayerScreenProps): ReactElement => {

    return (
        <Wrapper>
            { isLoading && <LottiePlayer animationData={LottieLoadMusic} size={{ width: 300, height: 300 }}/> }
            { !isLoading && <>재생중</>}
        </Wrapper>
    );
}

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`

export default PlayerScreen;