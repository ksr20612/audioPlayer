import { useState, useEffect, useRef, useCallback, useMemo, ReactElement } from 'react';
import styled, { css } from 'styled-components';
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
    console.log({ widthPlayed: currentTime / duration * 100 });
    return (
        <AudioSlider 
            key="audioSlider"
            min={0}
            max={duration}
            value={currentTime}
            // widthPlayed={currentTime / duration * 100}
            onChange={(e) => handleChange(e.target.value)}
            step="0.001"
        />
    );
};

const AudioSlider = styled.input.attrs({
    type: "range"
})`
    position: relative;
    width: 100%;
    height: 10px;
    font-size: 1.5rem;
	color: ${({theme}) => theme.color.color_500};
    border-radius: 10px;
	position: relative;
	background: transparent;
	overflow: hidden;

    &::-webkit-slider-runnable-track,
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 10px;
    }

    &::-webkit-slider-runnable-track,
    &::-webkit-slider-thumb {
        position: relative;
    }
    &::-webkit-slider-thumb {
        width: 10px;
        background-color: currentColor;
        box-shadow: calc(-100vmax - 5px) 0 0 100vmax currentColor;
        border-radius: 10px;
    }
    &::-webkit-slider-runnable-track {
        background: ${({theme}) => theme.color.color_100};
    }

    &::-moz-range-track,
    &::-moz-range-thumb {
        appearance: none;
        height: 10px;
    }
    &::-moz-range-thumb {
        background: currentColor;
        border: 0;
        width: 10px;
        border-radius: 5px;
    }
    &::-moz-range-track {
        width: 100%;
        background: ${({theme}) => theme.color.color_100};
    }
    &::-moz-range-progress {
        appearance: none;
        background: currentColor;
    }
    &::-moz-range-track,
    &::-moz-range-progress {
        height: 10px;
        border-radius: 10px;
    }
`

export default React.memo(Slider);