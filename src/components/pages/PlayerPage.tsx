import LottiePlayer from 'components/LottiePlayer';
import React, { ReactElement, useState, useEffect, useCallback, useRef } from 'react';
import LottieLoadMusic from 'assets/lottie/load_music.json';
import { EventObject } from 'types/Event';
import Music from 'components/molecules/Music';
import Screen from 'components/templates/Screen';
import Boundary from 'components/Boundary';
import Spinner from 'components/Spinner';
import styled from 'styled-components';
import { useAppSelector } from 'stores/Store';
import useCreateAudio from 'hooks/useCreateAudio';

interface PlayerPageProps {
  
}

const PlayerPage = ({}: PlayerPageProps): ReactElement => {

    return (
        <Screen />
    );
}

export default PlayerPage;