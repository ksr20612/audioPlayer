import { useState, useEffect, useRef, useCallback } from "react";

interface useCreateAudioProps {
    url: string | undefined;
    autoPlay?: boolean;
    callback?: () => void;
}

const useCreateAudio = ({ url, autoPlay = true, callback }: useCreateAudioProps) => {

    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [duration, setDuration] = useState<number>(0);
    const audioIdPlaying = useRef<string | null>(null);

    const play = useCallback((audioIdSelected: string) => {
        if (audioRef.current) {
            audioRef.current.play();
            audioIdPlaying.current = audioIdSelected;
            setIsPlaying(true);
        }
    }, []);
    
    const pause = useCallback(async () => {
        if (audioRef.current) {
            audioRef.current.pause();
            setIsPlaying(false);
        }
    }, []);

    const stop = useCallback(() => {
        if (audioRef.current) {
            audioRef.current.pause();
            audioRef.current.currentTime = 0;
            audioIdPlaying.current = null;
            setIsPlaying(true);
        }
    }, []);

    const onRangeChanged = useCallback((value: number | string) => {
        if (audioRef.current) {
            audioRef.current.currentTime = +value;
        }
    }, []);

    const renderAudio = () => {
        return (
            <>
                { url && 
                    <audio 
                        ref={audioRef}
                        src={url}
                        onPlaying={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                        onTimeUpdate={() => setCurrentTime(audioRef.current?.currentTime as number)}
                        onDurationChange={() => setDuration(audioRef.current?.duration as number)}
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