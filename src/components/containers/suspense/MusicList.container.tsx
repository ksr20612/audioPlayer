import { useMusicsQuery } from 'api/musics/queries';
import Boundary from 'components/Boundary';
import Music from 'components/molecules/Music';
import MusicList from 'components/organisms/MusicList';
import { useState, useEffect, useRef, useCallback, useMemo, ReactElement } from 'react';
import styled, { css } from 'styled-components';
import { EventObject } from 'types/Event';
import MusicListContainer from '../MusicList.container';
import { AudioControls } from 'types/AudioControls';

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