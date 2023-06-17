export interface AudioControls {
    isPlaying: boolean;
    play: (idSelected: string) => void;
    pause: () => void;
    stop: () => void;
    currentTime: number;
    duration: number;
    onRangeChanged: (value: number | string) => void;
}