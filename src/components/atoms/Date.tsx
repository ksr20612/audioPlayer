import React from 'react';
import { useState, useEffect, useRef, useCallback, useMemo, ReactElement } from 'react';
import styled, { css } from 'styled-components';
import { PropsWithChildren } from 'types/PropsWithChildren';

interface DateProps {
    
};

const Date = ({
    children
}: PropsWithChildren<DateProps>): ReactElement => {

    return (
        <Wrapper>
            { children }
        </Wrapper>
    );
};

const Wrapper = styled.span`
    
`

export default React.memo(Date);