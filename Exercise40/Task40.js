//   TASK #40 (Album:)
function make_album(artist, title, tracks) {
    var album = { artist: artist, title: title };
    if (tracks) {
        album["tracks"] = tracks;
    }
    return album;
}
console.log(make_album("King Sunny Adé", "The Best of the Classic Years"));
console.log(make_album("Miranda Lambert", "The Weight of These Wings"));
console.log(make_album("Daddy Yankee", "Barrio Fino"));
console.log(make_album("Adrianne Lenker", "Bright Future", 19));
