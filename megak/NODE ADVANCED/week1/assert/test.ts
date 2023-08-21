import {doesNotThrow, strict as assert, strictEqual, throws} from 'assert';
import {levenshteinDistance} from './index'

doesNotThrow(
    () => levenshteinDistance('Anna', 'Anka'),
    'it throws. ',
)
console.log('It does not throw')


doesNotThrow(
    () => levenshteinDistance('', ''),
    'It throws on empty strings.',
)
console.log('It does not throw on empty strings')

throws(
    ()=> levenshteinDistance('Ania', undefined),
    'it does not throw on incorrect input.'
)
console.log('it does throws on incorrect input')

strictEqual(
    levenshteinDistance('Anna', 'Anka'),
    1,
    'Anna to Anka has another distance than expected.',
)

console.log('It returns correct values')

strictEqual(
    levenshteinDistance('test', 'Test'),
    0,
    'Test and test has another distance than expected.',
)

console.log('It returns correct values')


