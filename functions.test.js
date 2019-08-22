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