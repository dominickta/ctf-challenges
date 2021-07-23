const table = [
    [0, 12, 2, 6, 12, 15, 15, 2, 12],
    [1, 6, 0, 15, 0, 11, 10, 7, 5],
    [2, 10, 14, 2, 14, 6, 8, 14, 11], 
    [3, 15, 1, 7, 4, 3, 5, 4, 10],
    [4, 14, 5, 12, 8, 1, 7, 11, 3],
    [5, 0, 13, 11, 11, 8, 14, 0, 7],
    [6, 11, 10, 0, 2, 14, 6, 3, 1],
    [7, 1, 9, 9, 7, 9, 3, 10, 9],
    [8, 4, 6, 4, 6, 5, 0, 6, 15],
    [9, 7, 4, 4, 9, 2, 12, 9, 13],
    [10, 5, 8, 8, 13, 7, 11, 8, 14],
    [11, 8, 7, 13, 15, 12, 1, 13, 0],
    [12, 9, 11, 10, 3, 13, 13, 5, 8],
    [13, 13, 12, 5, 1, 0, 4, 12, 4],
    [14, 2, 3, 1, 5, 4, 9, 15, 6],
    [15, 3, 15, 3, 10, 10, 2, 1, 2]
]
const intToChar = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P']
const mapCharToInt = new Map();
mapCharToInt.set('A', 0);
mapCharToInt.set('B', 1);
mapCharToInt.set('C', 2);
mapCharToInt.set('D', 3);
mapCharToInt.set('E', 4);
mapCharToInt.set('F', 5);
mapCharToInt.set('G', 6);
mapCharToInt.set('H', 7);
mapCharToInt.set('I', 8);
mapCharToInt.set('J', 9);
mapCharToInt.set('K', 10);
mapCharToInt.set('L', 11);
mapCharToInt.set('M', 12);
mapCharToInt.set('N', 13);
mapCharToInt.set('O', 14);
mapCharToInt.set('P', 15);

function keyGen() {
    key = Math.floor(Math.random() * 6) + 1
    return key
}

function encryption (message, key) {
    //var arrInt = [];
    var encrypted = "";
    var keyindex = key + 1;
    for(let i = 0; i < message.length; i++){
        //arrInt[i] = map.get(message.charAt(i))
        //arrInt[i] = table[arrInt[i]][key]
        encrypted = encrypted + intToChar[table[mapCharToInt.get(message.charAt(i))][keyindex]]
    }
    return encrypted;
}

/*
function decryption (message, key) {
    keyindex = key + 1
    var decrypted = "";
    var keyindex = key + 1;
    for(let i = 0; i < message.length; i++){

        //arrInt[i] = map.get(message.charAt(i))
        //arrInt[i] = table[arrInt[i]][key]
        decrypted = decrypted + intToChar[table[mapCharToInt.get(message.charAt(i))][keyindex]]
    }
    return decrypted
}
*/
