import { patternCount } from "../answer/soal_b"

describe('menghitung kata menggunakan function pattern count', () => {

    it('Input: “palindrom”, “ind”', () => {
        const pattern = patternCount('palindrom', 'ind')
        expect(pattern).toEqual(1)
    })

    it('Input: “abakadabra”, “ab”', () => {
        const pattern = patternCount('abakadabra', 'ab')
        expect(pattern).toEqual(2)
    })

    it('Input: “hello”, “”', () => {
        const pattern = patternCount('hello', '')
        expect(pattern).toEqual(0)
    })

    it('Input: “ababab”, “aba"', () => {
        const pattern = patternCount('ababab', 'aba')
        expect(pattern).toEqual(2)
    })

    it('Input: “aaaaaa”, “aa”', () => {
        const pattern = patternCount('aaaaaa', 'aa')
        expect(pattern).toEqual(5)
    })

    it('Input: “hell”, “hello”', () => {
        const pattern = patternCount('hell', 'hello')
        expect(pattern).toEqual(0)
    })



})