import { formatDate } from "./formatDate";

describe("[parseDate]", () => {
    it("완벽한 string 형태를 전달함", () => {
        const date = "2021-11-19T17:56:55.311551";
        const result = formatDate(date);
        expect(result).toEqual(`2021.11.19`);
    });
    it("불완전한 string 형태를 전달함", () => {
        const date = "2021-11T";
        const result = formatDate(date);
        expect(result).toEqual(null);
    })
})