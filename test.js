function convertToAscii(str) {
    let result = [];
    for (let i = 0; i < str.length; i++) {
        result.push(str.charCodeAt(i));
    }
    console.log(result.join(''));
}
convertToAscii("Hello");
