import {strict as assert} from 'assert';
import {handlebarsHelpers} from './utils/handlebars-helpers';
import {buildPerson} from "./utils/foobar";


// assert(handlebarsHelpers.equals(2, 2), 'numbers comparison');
// assert(handlebarsHelpers.equals('2', '3'), ' string comparison' );
// assert(handlebarsHelpers.equals(false, false), 'boolean comparison');

// assert.deepStrictEqual(
//      {
//     name : 'jan',
//     surname: 'testowy',
//
// }, {
//    name : 'jan',
//    surname: 'testowy',
// },
//     'Those are not the same.')

assert.deepStrictEqual(
    buildPerson('Jan', 'Testowy'),
    {
        name: 'Jan',
        surname: 'Testowy'
    },
    'Not the same.'
)

console.log('BuildPerson() builds proper objects')

//assert.deepStrictEqual([1, 3, 5],
//  [1, 3, 5])

assert.throws(() => buildPerson('', ''),
    {
        message: /and surname are required/
    }
)

console.log('BuildPerson() does not throw message when empty name or surname')

//assert.throws - dla synchronicznej
//assert.reject - dla asynchronicznej


assert.doesNotThrow(
    () => buildPerson('Kuba', 'Jakiś'),

);

console.log("BuildPerson() does not throw error message when the data is correct.")
