function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            release_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            artist: "Pink Floyd",
            title: "Another Brick in the Wall",
            release_year: 1979,
            id: 7,
            formats: {
                1: "CD",
                2: "LP",
                3: "8T"
            }
        } 
    };
    return myMusic;
}
myFunction()[2];
module.exports = myFunction; 