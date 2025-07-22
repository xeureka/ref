// importing the function first

// describe Block: this groups related tests test takes two paramets:
// string that descrbes the group of tests
// the calback function containing the test cases
// test or test Block each teset is defined wtesthin a test or test block 
// expectations insde the test callback you use the expect to create assertions about the returned values

// .toBe(value) checks for strict equaltesty
// .toBeCloseTo(value) useful for comparing floating point numbers

import {calcuateUserScore} from '../services/userService'

describe('add function', () => {
    test('1 + 2 = 3', () => {
        const score = calcuateUserScore(1,2)
        expect(score).toBe(3)
    })

    test('2 + 3 = 5', () =>{
        const score = calcuateUserScore(2,3)
        expect(score).toBe(5)
    })
})
