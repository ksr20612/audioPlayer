import React from 'react';
import { useState, useEffect, useRef, useCallback, useMemo, ReactElement, ReactNode, CSSProperties } from 'react';
import styled, { css } from 'styled-components';
import { PropsWithChildren } from 'types/PropsWithChildren';

interface TitleProps {
    styles?: CSSProperties;
};

const Title = ({
    styles = {},
    children,
}: PropsWithChildren<TitleProps>): ReactElement => {

    return (
        <Wrapper style={styles}>{ children }</Wrapper>
    );
};

const Wrapper = styled.h1.attrs({
    tabIndex: 0,
})`

`

export default React.memo(Title);