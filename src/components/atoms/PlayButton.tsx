import { useState, useEffect, useRef, useCallback, useMemo, ReactElement, CSSProperties } from 'react';
import styled, { css } from 'styled-components';
import { EventFunc } from 'types/Event';
import playButtonImage from 'assets/images/ic-small-fill-play-gray.png';
import stopButtonImage from 'assets/images/ic-small-line-stop-gray.png';
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
        <>
            { isPlaying && <Image src={stopButtonImage} alt="일시정지" onClick={handleClick} style={styles} aria-pressed={true} /> }
            { !isPlaying && <Image src={playButtonImage} alt="재생" onClick={handleClick} style={styles} aria-pressed={false} /> }
        </>
    );
};

const Image = styled.img.attrs({
    role: "button",
    tabIndex: 0,
})`
    width: 20px;
    cursor: pointer;
    transition: transform .1s ease-in-out;
    &:hover, &:focus, &:active { transform: scale(1.1) };
`

export default React.memo(PlayButton);