import Clock from 'components/atoms/Clock';
import Slider from 'components/atoms/Slider';
import React, { ReactElement, useState, useEffect, useCallback, useRef } from 'react';
import styled, { css } from 'styled-components';
import { AudioControls } from 'types/AudioControls';
import { parseTime } from 'utils/parseTime';

interface SliderWithClockProps {
    controls: AudioControls;
}

const SliderWithClock = ({
    controls
}: SliderWithClockProps): ReactElement => {

    return (
        <>
            <Clock>{ parseTime(controls.currentTime) }</Clock>
            <Slider 
                duration={controls.duration}
                currentTime={controls.currentTime}
                handleChange={controls.onRangeChanged}
            /> 
            <Clock>{ parseTime(controls.duration) }</Clock>
        </>
    );
}

export default SliderWithClock;