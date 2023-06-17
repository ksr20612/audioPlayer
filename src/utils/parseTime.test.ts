import { parseTime } from "./parseTime";

describe("[parseTime]", () => {
    it("완벽한 number형태를 전달함", () => {
        const time = 301;
        const result = parseTime(time);
        expect(result).toEqual("05:01");
    });
    it("0을 전달함", () => {
        const time = 0;
        const result = parseTime(time);
        expect(result).toEqual("00:00");
    })
})