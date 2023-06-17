import React from 'react';
import { useState, useEffect, useRef, useCallback, useMemo, ReactElement } from 'react';
import styled, { css } from 'styled-components';
import { PropsWithChildren } from 'types/PropsWithChildren';

interface MoodProps {
    
};

const Mood = ({
    children
}: PropsWithChildren<MoodProps>): ReactElement => {

    return (
        <Wrapper>
            { children }
        </Wrapper>
    );
};

const Wrapper = styled.span`
    padding: 5px;
    background-color: ${({theme}) => theme.color.color_200};
    border-radius: 5px;
`

export default React.memo(Mood);