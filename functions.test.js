const functions = require('./functions');


// ToBe is for Primitive Types (e.g. string, number, boolean)
test('Adds 2 + 2 to equal 4', () => {
    expect(functions.add(2, 2)).toBe(4);
});

test('Adds 2 + 2 to NOT equal 5', () => {
    expect(functions.add(2, 2)).not.toBe(5);
});

// CHECK FOR TRUTHY & FALSY VALUES
// toBENull matches only null
// toBeUndefined matches only undefined
// toBeDefined is the opposite of toBeUndefined
// toBeTruthy matches anything that an if statement treats as true
// toBeFalsy matches anything that an if statemnet treats as false

test('To be Null', () => {
    expect(functions.isNull()).toBeNull();
});


test('To be falsy', () => {
    expect(functions.checkValue(null)).toBeFalsy();
});



// toEqual is for reference data types e.g.(Arrays, Objects)
test('User should return Gawah Chan object', () => {
    expect(functions.createUser()).toEqual({'firstName': 'Gawah', 'lastName': 'Chan'});
});

// Less than and greater than:
// toBeLessThan()
// toBeLessThanOrEqual()
// toBeGreaterThan()
// toBeGreaterThanOrEqual()

test('Should be under 1600', () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
});

// Regex
test('There is no I in team', () => {
    expect('team').not.toMatch(/I/i);
});

// Arrays
// Arrays can also use .toContain()
test('Admin should be in userNames', () => {
    userNames = ['John', 'Karen', 'admin'];
    expect(userNames).toContain('admin');
});