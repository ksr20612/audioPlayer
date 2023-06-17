export const formatDate = (value: string) => {
    const parsedDate = value.split("T")[0].split("-");
    if(parsedDate?.length < 3) return null;
    return `${parsedDate[0]}.${parsedDate[1]}.${parsedDate[2]}`;
}