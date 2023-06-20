import React from 'react';
import { ReactElement } from 'react';
import styled from 'styled-components';
import { PropsWithChildren } from 'types/PropsWithChildren';

interface GenreProps {

};

const Genre = ({
    children
}: PropsWithChildren<GenreProps>): ReactElement => {

    return (
        <Wrapper>
            { children }
        </Wrapper>
    );
};

const Wrapper = styled.span`
    
`

export default React.memo(Genre);