import { useState, useEffect, useRef, useCallback } from "react";

interface useCreateAudioProps {
    url: string | undefined;
    autoPlay?: boolean;
    callback?: () => void;
}

const useCreateAudio = ({ url, autoPlay = true, callback }: useCreateAudioProps) => {

    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    // const [loop, setLoop] = useState<boolean>(false);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);
    // const [playbackRate, setPlaybackRate] = useState<number>(1);
    // const [volume, setVolume] = useState<number>(1);
    
    // const audioIdSelected = useAppSelector((state) => state.audio.audioIdSelected);
    const audioIdPlaying = useRef<string | null>(null);

    // useEffect(() => {
    //     console.log({ audioIdPlaying, audioIdSelected });
    //     if (audioIdPlaying.current) {
    //         if (audioIdPlaying.current !== audioIdSelected) {
    //             stop();
    //             audioIdPlaying.current = audioIdSelected;
    //             play();
    //         }
    //     }
    // }, [audioIdSelected]);

    const play = useCallback((audioIdSelected: string) => {
        if (audioRef.current) {
            audioRef.current.play();
            audioIdPlaying.current = audioIdSelected;
            setIsPlaying(true);
            console.log("Audio Play");
        }
    }, []);
    
    const pause = useCallback(async () => {
        if (audioRef.current) {
            audioRef.current.pause();
            setIsPlaying(false);
            console.log("Audio Pause");
        }
    }, []);

    const stop = useCallback(() => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            audioIdPlaying.current = null;
            setIsPlaying(true);
            console.log("Audio Stop");
        }
    }, []);

    // const calculateTime = useCallback((time: number, total: number) => {
    //     let int = Math.floor(time);
    //     if (total) {
    //         int = Math.floor(total) - Math.floor(time);
    //     }
    //     const minute = (Math.floor(int / 60) + '').padStart(2, '0');
    //     const second = (int % 60 + '').padStart(2, '0');
    //     return `${minute}:${second}`;
    // }, []);
    
    const onRangeChanged = useCallback((value: number | string) => {
        if (audioRef.current) {
            audioRef.current.currentTime = +value;
        }
    }, []);
    
    // const onPlaybackRateChanged = useCallback((value: number | string) => {
    //     if (audioRef.current) {
    //         audioRef.current.playbackRate = +value;
    //     }
    // }, []);

    // const onVolumeChanged = useCallback((value: number | string) => {
    //     if (audioRef.current) {
    //         audioRef.current.volume = +value;
    //     }
    // }, []);
    
    const renderAudio = () => {
        return (
            <>
                { url && 
                    <audio 
                        ref={audioRef}
                        src={url}
                        // loop={loop}
                        onPlaying={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                        onTimeUpdate={() => setCurrentTime(audioRef.current?.currentTime as number)}
                        onDurationChange={() => setDuration(audioRef.current?.duration as number)}
                        // onRateChange={() => setPlaybackRate(audioRef.current?.playbackRate as number)}
                        // onVolumeChange={() => setVolume(audioRef.current?.volume as number)}
                        onEnded={callback}
                        autoPlay={autoPlay}
                    />
                }
            </>
        );
    };

    return {
        renderAudio,
        controls: {
            isPlaying,
            play,
            pause,
            stop,
            currentTime,
            duration,
            onRangeChanged,
        },
        play,
        pause,
    };
};

export default useCreateAudio;