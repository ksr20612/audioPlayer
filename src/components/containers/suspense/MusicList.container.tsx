import Boundary from 'components/Boundary';
import { useState, useEffect, useRef, useCallback, useMemo, ReactElement } from 'react';
import styled, { css } from 'styled-components';
import MusicListContainer from '../MusicList.container';

interface MusicListSuspenseContainerProps {

};

const MusicListSuspenseContainer = ({

}: MusicListSuspenseContainerProps): ReactElement => {

    return (
        <Wrapper>
            <Boundary>
                <MusicListContainer />
            </Boundary>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
    border: 1px solid ${({theme}) => theme.color.main_text};
`

export default MusicListSuspenseContainer;