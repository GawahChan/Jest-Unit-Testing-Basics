function reverseString(str) {
    let stringArray = str
        .toLowerCase()
        .split('')
        .reverse();
    
    if (str.charAt(0) === str.charAt(0).toUpperCase()) {
        let newCapitalLetter = stringArray
            .shift()
            .toUpperCase();

        stringArray.unshift(newCapitalLetter);

        return stringArray.join('');

    } else {
        return stringArray.join('');
    }

}

module.exports = reverseString; 