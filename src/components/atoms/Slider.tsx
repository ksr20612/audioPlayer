import { useState, useEffect, useRef, useCallback, useMemo, ReactElement } from 'react';
import styled, { css } from 'styled-components';
import { Size } from 'types/Size';
import { AudioControls } from 'types/AudioControls';
import React from 'react';

interface SliderProps {
    duration: number;
    currentTime: number;
    handleChange: (value: string) => void;
};

const Slider = ({
    duration,
    currentTime,
    handleChange,
}: SliderProps): ReactElement => {
    return (
        <AudioSlider 
            key="audioSlider"
            min={0}
            max={duration}
            value={currentTime}
            widthPlayed={currentTime / duration * 100}
            onChange={(e) => handleChange(e.target.value)}
            step="0.001"
        />
    );
};

const AudioSlider = styled.input.attrs({
    type: "range"
})<{
    widthPlayed: number
}>`
    position: relative;
    width: 100%;
    height: 20px;

    &::-webkit-slider-runnable-track {
        width: 100%;
        height: 20px;
        cursor: pointer;
        background: ${({theme, widthPlayed}) => `linear-gradient(to right, ${theme.color.color_400} calc(${widthPlayed+"%"} + 10px), ${theme.color.color_200} calc(${widthPlayed+"%"} + 10px))`};
        border-radius: 10px;
    }
    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 0;
        background-color: ${({theme}) => theme.color.color_300};
        cursor: pointer;
    }
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        position: relative;
        box-sizing: content-box;
        height: 20px;
        aspect-ratio: 1 / 1;
        border-radius: 50%;
        background-color: transparent;
        cursor: pointer;
    }
`

export default React.memo(Slider);