// import React, { ReactElement, useState, useEffect, useCallback, useRef } from 'react';
// import styled, { css } from 'styled-components';
// import { Color } from 'types/Color';
// import { EventFunc } from 'types/Event';
// import { Size } from 'types/Size';

// type NewType = Size;

// interface SVGWrapperProps {
//     svg: ReactElement,
//     width?: Size,
//     height?: NewType,
//     style?: React.CSSProperties,
//     handleClick?: EventFunc,
// }

// const SVGWrapper = ({
//     svg,
//     width,
//     height,
//     style,
//     handleClick,
// }: SVGWrapperProps): ReactElement => {
//     return (
//         <Container width={width} height={height} style={style} onClick={handleClick}>
//             {svg}
//         </Container>
//     )
// }

// const Container = styled.div<{
//     width: Size | undefined,
//     height: Size | undefined,
//     color?: Color,
// }>`
//     width: ${({width})=>width? width : "auto"};
//     height: ${({height})=>height? height : "auto"};
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     /* & [fill="current"] {
//         fill: ${({color})=>color? color : "unset"};
//     } */
// `

// export default SVGWrapper;