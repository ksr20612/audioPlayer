import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { Music, MusicsURL } from "api/musics";
import { AudioControls } from "types/AudioControls";
import { AudioState } from "types/AudioState"

interface InitialState {
    // audioState: AudioState,
    audioIdSelected: Music["id"],
    audioTitleSelected: Music["title"],
    audioUrlSelected: MusicsURL["url"],
    audioControls: AudioControls | null,
}

const initialState: InitialState = {
    // audioState: AudioState.DEFAULT,
    audioIdSelected: "",
    audioTitleSelected: "",
    audioUrlSelected: "",
    audioControls: null,
}

export const AudioSlice = createSlice({
    name: "audio",
    initialState,
    reducers: {
        // setAudioState: (state, { payload }: PayloadAction<AudioState>) => {
        //     state.audioState = payload;
        // },
        setAudioIdSelected: (state, { payload }: PayloadAction<Music["id"]>) => {
            state.audioIdSelected = payload;
        },
        setAudioTitleSelected: (state, { payload }: PayloadAction<Music["title"]>) => {
            state.audioTitleSelected = payload;
        },
        setAudioControls: (state, { payload }: PayloadAction<AudioControls>) => {
            state.audioControls = payload;
        },
        setAudioUrlSelected: (state, { payload }: PayloadAction<MusicsURL["url"] | undefined>) => {
            if(!payload) return;
            state.audioUrlSelected = payload;
        },
        resetAllState: (state) => {
            Object.assign(state, initialState);
        }
    }
});

export const { setAudioIdSelected, setAudioTitleSelected, setAudioUrlSelected, setAudioControls } = AudioSlice.actions;
export default AudioSlice.reducer;