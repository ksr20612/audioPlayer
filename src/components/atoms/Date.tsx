import React from 'react';
import { ReactElement } from 'react';
import styled from 'styled-components';
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