import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { PropsWithChildren } from 'types/PropsWithChildren';

interface ClockProps {

}

const Clock = ({
    children
}: PropsWithChildren<ClockProps>): ReactElement => {

    return (
        <Wrapper>
            { children }
        </Wrapper>
    );
}

const Wrapper = styled.div`
    width: 50px;
`

export default React.memo(Clock);