function playingCards(faces, suits) {

    const validFaces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const validSuits = ['S', 'H', 'D', 'C'];

    const suitToChar = {

        'S' : "\u2660",
        'H' : "\u2665 ",
        'D': "\u2666",
        'C': "\u2663",
};

    isValid(faces, suits);

    return {
        faces: faces,
        suits : suits,
        toString: () => {

            return `${faces}${suitToChar[suits]}`;

        }
    };

    function isValid(faces, suits) {

        if(!validFaces.includes(faces)){

            throw new Error('Invalid face!');
        }
        if (!validSuits.includes(suits)) {
            throw new Error('Invalid suit!');
        }
    }

}


console.log(playingCards('2', 'H').toString());
console.log(playingCards('A', 'S').toString());