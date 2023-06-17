import { useMusicsByMusicIdQuery } from 'api/musics/queries';
import AudioPlayer from 'components/organisms/AudioPlayer';
import useCreateAudio from 'hooks/useCreateAudio';
import { useState, useEffect, useRef, useCallback, useMemo, ReactElement } from 'react';
import { useAppDispatch, useAppSelector } from 'stores/Store';
import { setAudioControls, setAudioUrlSelected } from 'stores/slices/audio.slice';

interface AudioPlayerContainerProps {

};

const AudioPlayerContainer = ({

}: AudioPlayerContainerProps): ReactElement => {

    const dispatch = useAppDispatch();
    const audioIdSelected = useAppSelector(state => state.audio.audioIdSelected);
    const audioTitleSelected = useAppSelector(state => state.audio.audioTitleSelected);
    const { data: musicData } = useMusicsByMusicIdQuery({ musicId: audioIdSelected }, {
        enabled: !!audioIdSelected,
    });
    useEffect(() => {
        dispatch(setAudioUrlSelected(musicData?.url));
    }, [musicData?.url, dispatch]);

    const { renderAudio, controls } = useCreateAudio({ url: musicData?.url });
    useEffect(() => {
        if(controls) {
            dispatch(setAudioControls(controls));
        }
    }, [controls, dispatch]);

    return (
        <>
            {
                musicData?.url && 
                <>
                    { renderAudio() }
                    <AudioPlayer 
                        audioTitle={audioTitleSelected} 
                        audioId={audioIdSelected}
                        controls={controls}
                    />
                </>
            }
        </>
    );
};

export default AudioPlayerContainer;