function keyGen(length) {
    key = Math.floor(Math.random() * (length / 2)) + 2
    return key
}
function blocksizeGen(length) {
    block = Math.floor(Math.random() * (length / 2)) + 2
    return block
}
function encryption(message, key, blocksize) {
    var encrypted = ""
    for(let i = 0; i < Math.ceil(message.length/blocksize); i++) {
        if(message.length >= blocksize) {
            encrypted = encrypted + encryptionBC(message.substring(0, blocksize) ,key)
            message = message.substring(blocksize, message.length + 1)
        } else {
            encrypted = encrypted + encryptionBC(message.substring(0, message.length + 1) ,key)

        }

    }
    return encrypted

}

function encryptionBC (message, key) {
    
    var encrypted = message.substring(key, key.length) +
              message.substring(0, key);
    return encrypted
    
    /*
    if (key == 1)
    {
        console.log(message);
        return message;
    }
    let str1 = message.split("");

    // Find length of string
    let len = message.length;

    // Create an array of
    // strings for all n rows
    let arr = new Array(key);
    for(let i=0;i<key;i++)
    {
        arr[i]="";
    }
     

    // Initialize index for
    // array of strings arr[]
    let row = 0;
    let down = true; // True if we are moving
    // down in rows, else false

    // Traverse through
    // given string
    for (let i = 0; i < len; ++i)
    {
        // append current character
        // to current row
        arr[row] += (str1[i]);

        // If last row is reached,
        // change direction to 'up'
        if (row == key - 1)
        {
            down = false;
        }
          
        // If 1st row is reached,
        // change direction to 'down'
        else if (row == 0)
        {
            down = true;
        }

        // If direction is down,
        // increment, else decrement
        if (down)
        {
            row++;
        }
        else
        {
            row--;
        }
    }
    var encrypted = "";
    for (let i = 0; i < key; ++i)
    {
        encrypted = encrypted + arr[i];
    }
    return encrypted

    */
}

function decryption (message, key) {

    encryption(message, message.length - key)
    return decrypted
}