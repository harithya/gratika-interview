import { letterCount, sortText } from "../answer/soal_a";

describe('menghitung banyak nya huruf yang user masukan dalam 1x inputan', () => {

    it('Input : “Hello World”', () => {
        const pattern = letterCount('Hello World')
        const sort = sortText('Hello World');

        expect(sort).toEqual(['d', 'e', 'H', 'l', 'l', 'l', 'o', 'o', 'r', 'W'])
        expect(pattern).toEqual({ d: 1, e: 1, H: 1, l: 3, o: 2, r: 1, W: 1 })
    })

    it('Input : “Bismillah”', () => {
        const pattern = letterCount('Bismillah')
        const sort = sortText('Bismillah')
        expect(sort).toEqual(['a', 'B', 'h', 'i', 'i', 'l', 'l', 'm', 's'])
        expect(pattern).toEqual({ a: 1, B: 1, h: 1, i: 2, l: 2, m: 1, s: 1 })
    })

    it('Input : MasyaAllah', () => {
        const pattern = letterCount('MasyaAllah')
        const sort = sortText('MasyaAllah')
        expect(sort).toEqual(['A', 'a', 'a', 'a', 'h', 'l', 'l', 'M', 's', 'y'])
        expect(pattern).toEqual({ A: 1, a: 3, h: 1, l: 2, M: 1, s: 1, y: 1 })
    })
})