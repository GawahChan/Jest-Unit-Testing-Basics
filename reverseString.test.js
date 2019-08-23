const reverseString = require('./reverseString');

test('reverseString function exists', () => {
    expect(reverseString).toBeDefined();
});

test('test string with all lowercase', () => {
    expect(reverseString('hello')).toBe('olleh');
});

test('test string with uppercase letter in first element', () => {
    expect(reverseString('Hello')).toBe('Olleh');
});