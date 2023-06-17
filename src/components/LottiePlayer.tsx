import React, { ReactElement, useState, useEffect, useCallback, useRef } from 'react';
import Lottie from 'react-lottie';
import styled, { css } from 'styled-components';
import { Size } from 'types/Size';

interface LottiePlayerProps {
    animationData: any,
    size: {
        width: number,
        height: number,
    }
}

const LottiePlayer = ({
    animationData,
    size: { width, height }
}: LottiePlayerProps): ReactElement => {

    return (
        <Lottie 
            options={{
                loop: true,
                autoplay: true,
                animationData,
                rendererSettings: {
                    preserveAspectRatio: 'xMidYMid slice',
                }
            }}
            isClickToPauseDisabled={true}
            height={width}
            width={height} 
        />
    );
}

export default LottiePlayer;