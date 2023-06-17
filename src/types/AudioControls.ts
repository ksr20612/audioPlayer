export interface AudioControls {
    isPlaying: boolean;
    play: (idSelected: string) => void;
    pause: () => void;
    stop: () => void;
    currentTime: number;
    duration: number;
    // calculateTime: (time: number, total: number) => string;
    onRangeChanged: (value: number | string) => void;
}