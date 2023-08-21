import faker from 'faker';

faker.seed(123)

const groups = ['A', 'B', 'C'];
const getRandomGroup = (index) => groups[index];
const getRandomAverage = () => faker.datatype.number({min: 2, max: 5, precision: 0.1})

const student = {
        id: faker.datatype.uuid(),
        name: faker.fake('{{name.firstName}} {{name.lastName}}'),
        attendance: `${faker.datatype.number({min: 0, max: 100})}`,
        average: getRandomAverage(),
        group: getRandomGroup(faker.datatype.number({min: 0, max:2})),
        course:  faker.fake('{{random.word}} {{random.word}}'),
        grades: [
            {
                subject: 'Graphics design.',
                average: getRandomAverage(),
            },
            {
                subject: 'History of art.',
                average: getRandomAverage(),
            },
            {
                subject: 'Spanish',
                average: getRandomAverage(),
            },
        ]}
console.log(student)