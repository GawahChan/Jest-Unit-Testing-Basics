function chunkArray(array, length) {
    const chunkedArr = [];

    array.forEach(value => {
        const lastElement = chunkedArr[chunkedArr.length - 1];

        if(!lastElement || lastElement.length === length) {
            chunkedArr.push([value]);
        } else {
            lastElement.push(value);
        }
    });

    return chunkedArr;
}

module.exports = chunkArray;