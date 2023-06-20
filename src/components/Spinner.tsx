import styled, { useTheme } from "styled-components";
import { ReactElement } from "react";
import { ReactComponent as LoadingSvg } from "assets/svgs/loading.svg";
import { Size } from "types/Size";
import { Color } from "types/Color";

interface SpinnerProps {
    size?: Size,
    color?: Color,
    strokeWidth?: number,
}
const Spinner = ({ 
    size = "50px", 
    color, 
    strokeWidth = 10,
}: SpinnerProps): ReactElement => {
    
    const theme = useTheme();

    return (
        <SpinnerWrapper
            width={size}
            height={size}
            stroke={color || theme?.color.color_400}
            strokeWidth={strokeWidth}
        />
    )
}

const SpinnerWrapper = styled(LoadingSvg).attrs({
    "aria-label" : "로딩중",
    "role" : "alert",
    tabIndex : 0,
})`
    animation : rotate 2s linear infinite;
    & .circular-loader {
        animation: rotate 2s linear infinite;
        height: 100%;
        transform-origin: center center;
        width: 100%;
        position: absolute;
        top: 0;
        left: 0;
        margin: auto;
    }
    & .loader-path {
        stroke-dasharray: 150,200;
        stroke-dashoffset: -10;
        animation: dash 1.5s ease-in-out infinite;
        stroke-linecap: round;
    }
    @keyframes rotate {
        100% {
            transform: rotate(360deg);
        }
    }
    @keyframes dash {
        0% {
            stroke-dasharray: 1,200;
            stroke-dashoffset: 0;
        }
        50% {
            stroke-dasharray: 89,200;
            stroke-dashoffset: -35;
        }
        100% {
            stroke-dasharray: 89,200;
            stroke-dashoffset: -125;
        }
    }
`

export default Spinner;