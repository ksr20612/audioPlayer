import { useMusicsByMusicIdQuery } from 'api/musics/queries';
import React, { ReactElement, useState, useEffect, useCallback, useRef } from 'react';
import { useAppSelector } from 'stores/Store';

const useFetchAudio = () => {

    const audioIdSelected = useAppSelector(state => state.audio.audioIdSelected);
    const { data: audioData } = useMusicsByMusicIdQuery({ musicId: audioIdSelected }, {
        enabled: !!audioIdSelected
    });

    return {
        url: audioData?.url,
    };
}

export default useFetchAudio;