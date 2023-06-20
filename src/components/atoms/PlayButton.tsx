import { useState, useEffect, useRef, useCallback, useMemo, ReactElement, CSSProperties } from 'react';
import styled, { css } from 'styled-components';
import { EventFunc } from 'types/Event';
import playButtonImage from 'assets/images/play-svgrepo-com.png';
import stopButtonImage from 'assets/images/pause-svgrepo-com.png';
import React from 'react';

interface PlayButtonProps {
    isPlaying: boolean;
    handleClick: EventFunc;
    styles?: CSSProperties;
};

const PlayButton = ({
    isPlaying,
    handleClick,
    styles = {}
}: PlayButtonProps): ReactElement => {

    return (
        <Button onClick={handleClick}>
            { isPlaying && <img src={stopButtonImage} alt="일시정지" style={styles} aria-pressed={true} /> }
            { !isPlaying && <img src={playButtonImage} alt="재생" style={styles} aria-pressed={false} /> }
        </Button>
    );
};

const Button = styled.button`
    width: 50px;
    transition: transform .1s ease-in-out;
    &:hover, &:focus, &:active { transform: scale(1.1) };
    cursor: pointer;
`

export default React.memo(PlayButton);