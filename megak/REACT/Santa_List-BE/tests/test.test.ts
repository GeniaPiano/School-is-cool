 //
// test('adds 3 - 2 to equal 1', () => {
//     expect(3-2).toBe(1)
// })
//
// test('object are not the same', () => {
//     const person1 = {
//         firstName:'Anna',
//         lastName: 'Kowalska',
//         age: '25'
//     }
//
//     const person2 = {
//         ...person1,
//         lastName: 'Testowa',
//         bio: 'Lorem ipsum.. .'
//     }
//        expect(person1).toStrictEqual(person2)
// })

import {buildPerson, getMyTemperature} from "../utils/foobar";

// test('foo bar test something', () => {
//     expect('Ala' + 3).toBeNaN()
// })

test('buidname do sth', () => {

    expect(buildPerson('Ala', 'Koralowa')).toBeDefined()
})

test('getMyBodyTemperature should give from 33 to 45 degrees', () => {
    expect(getMyTemperature()).toBeGreaterThanOrEqual(33);
    expect(getMyTemperature()).toBeLessThanOrEqual(45);
})

 test('sum of decimals', () => {
     expect(0.2 + 0.1).toBeCloseTo(0.3)
 })

 test('coś', () => {
     expect(()=> buildPerson('','')).toThrow();
 })

 test('blablabla', ()=> {
     expect('Ala a kota, a kota ma Alę').toMatch(/kot/)
 })

 test('blablabla', ()=> {
     expect([1, 3, 5 ]).toContain(3)
 })

 test('blablabla', ()=> {
     expect([1, 3, 5 ]).not.toContain('a')
 })

 test('blablabla', async ()=> {
     expect([1, 3, 5 ]).toContain(3)
 })




