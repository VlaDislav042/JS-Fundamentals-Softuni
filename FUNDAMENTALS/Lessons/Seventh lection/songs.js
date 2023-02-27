function songs(input) {
    class Song {
        constructor(typeList, name, time) {
            this.typeList = typeList;
            this.name = name;
            this.time = time;
        }
    }
    let songsNum = input.shift();
    let typeSong = input.pop();
    let songArr = [];
    for (let i = 0; i < songsNum; i++) {
        let [typeList, name, time] = input[i].split("_");
        let song = new Song(typeList, name, time);
        songArr.push(song);
    }
    if (typeSong === "all") {
        songArr.forEach(i => {
            console.log(i.name)});
    } else {
        let filtered = songArr.filter((i) => i.typeList === typeSong);
        filtered.forEach((i) => console.log(i.name));
    }
}

// songs([3,
//     'favourite_DownTown_3:14',
//     'favourite_Kiss_4:16',
//     'favourite_Smooth Criminal_4:01',
//     'favourite']
// );
console.log("--------------");
songs([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
);
// console.log("--------------");
// songs([2,
//     'like_Replay_3:15',
//     'ban_Photoshop_3:48',
//     'all']
// );