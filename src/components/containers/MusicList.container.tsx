import { useMusicsQuery } from 'api/musics/queries';
import { Music } from 'types/Music';
import MusicList from 'components/organisms/MusicList';
import { useCallback, ReactElement } from 'react';
import { useDispatch } from 'react-redux';
import { useAppSelector } from 'stores/Store';
import { setAudioIdSelected, setAudioTitleSelected } from 'stores/slices/audio.slice';

interface MusicListContainerProps {

};

const MusicListContainer = ({

}: MusicListContainerProps): ReactElement => {

    const dispatch = useDispatch();
    const { data: musicData } = useMusicsQuery();

    const audioIdSelected = useAppSelector(state => state.audio.audioIdSelected);
    const play = useAppSelector(state => state.audio.audioControls?.play);
    const pause = useAppSelector(state => state.audio.audioControls?.pause);
    const isPlaying = useAppSelector(state => state.audio.audioControls?.isPlaying);
    const stop = useAppSelector(state => state.audio.audioControls?.stop);
    const handleClick = useCallback((musicId: Music["id"], musicTitle: Music["title"]) => {
        console.log({ audioIdSelected, musicId, isPlaying });
        if(audioIdSelected === musicId) {
            if(isPlaying) {
                pause && pause();
            }else {
                play && play(audioIdSelected);
            }
        }else {
            stop && stop();
            dispatch(setAudioIdSelected(musicId));
            dispatch(setAudioTitleSelected(musicTitle));
            play && play(audioIdSelected);
        }
    }, [audioIdSelected, play, pause, isPlaying]);

    return (
        <MusicList 
            musicList={musicData?.items ?? []}
            handleClick={handleClick} 
            audioIdSelected={audioIdSelected}
            isPlaying={!!isPlaying}                
        />
    );
};

export default MusicListContainer;