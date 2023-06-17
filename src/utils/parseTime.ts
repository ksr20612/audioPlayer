export const parseTime = (time: number) => {
    let int = Math.floor(time);
    const minute = (Math.floor(int / 60) + '').padStart(2, '0');
    const second = (int % 60 + '').padStart(2, '0');
    return `${minute || "00"}:${second || "00"}`;
}