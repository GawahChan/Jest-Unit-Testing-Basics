

// beforeEach(() => initDatabase());
// afterEach(() => closedDataBase());
beforeAll(() => initDatabase());
afterAll(() => closedDataBase());

const initDatabase = () => console.log('Database Initialized...');
const closedDataBase = () => console.log('DataBase Closed ...');
const nameCheck = () => console.log('Checking Name...');

describe('Checking Names', () => {
    beforeEach(() => nameCheck());

    test('User is Jeff', () => {
        const user = 'Jeff';
        expect(user).toBe('Jeff');
    });

    test('User is Karen', () => {
        const user = 'Karen';
        expect(user).toBe('Karen');
    })
})