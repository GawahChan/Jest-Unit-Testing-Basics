const functions = require('./functions');

// ToBe is for Primitive Types (e.g. string, number, boolean)
test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

// toBeNull
test('To be Null', () => {
    expect(functions.isNull()).toBeNull();
});

// toBeFalsy
test('To be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
});

// toEqual is for reference data types e.g.(Arrays, Objects)
test('User should return Gawah Chan object', () => {
    expect(functions.createUser()).toEqual({'firstName': 'Gawah', 'lastName': 'Chan'});
});

// .toBeLessThan()
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
});

// .toBeLessThanOrEqual()
test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
});

// Regex
// .toMatch()
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/i);
});

// Arrays
// Arrays can also use .toContain()
test('Admin should be in userNames', () => {
    userNames = ['John', 'Karen', 'admin'];
    expect(userNames).toContain('admin');
});

// Working with Async Data, use expect.assertions()
// expect.assertions() verifies a certain number of assertions are called (used for async testing)
//Promise
// test('User fetched name is Leanne Graham', () => {
//     expect.assertions(1);
//     return functions.fetchUser()
//         .then(data => {
//             expect(data.name).toEqual('Leanne Graham');
//         })
// });

// Async/Await
test('User fetched name is Leanne Graham', async () => {
    expect.assertions(1);
    const data = await functions.fetchUser();
    expect(data.name).toEqual('Leanne Graham');
});
