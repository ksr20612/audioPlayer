export interface Callback {
    onSuccess?: () => void,
    onError?: () => void,
    onSettled?: () => void,
}