import { sortArray } from "../answer/soal_c";

describe('sort array', () => {

    it('mengurutkan array [12, 9, 30, "A", "M", 99, 82, "J", "N", "B"]', () => {
        const sort = sortArray([12, 9, 30, "A", "M", 99, 82, "J", "N", "B"]);
        expect(sort).toEqual(["A", "B", "J", "M", "N", 9, 12, 30, 82, 99])
    })

})