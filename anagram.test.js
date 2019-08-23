const isAnagram = require('./anagram.js');

test('test if isAnagram function exists', () => {
    expect(isAnagram).toBeDefined();
})

test('"cinema" is an anagram of "iceman"', () => {
    expect(isAnagram('cinema', 'iceman')).toBeTruthy();
});

test('"Dormitory" is an anagram of "dirty room##"', () => {
    expect(isAnagram('Dormitory', 'dirty room##')).toBeTruthy();
});

test('"Hello" is NOT an anagram of "Aloha"', () => {
    expect(isAnagram('Hello', 'Aloha')).toBeFalsy();
})