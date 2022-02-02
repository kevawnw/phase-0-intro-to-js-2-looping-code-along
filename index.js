function writeCards(names, birthday) {
    let newArray = []
    for(let c = 0; c < names.length; c++) {
        newArray.push(`Thank you, ${names[c]}, for the wonderful surprise gift!`)
    }
    return newArray;

}

function countDown() {
    let countdown = 10
    while(countdown >= 0) {
        console.log(countdown--);
    }


}