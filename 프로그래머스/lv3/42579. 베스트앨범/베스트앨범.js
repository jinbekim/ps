
// const playsRecord =  {
    /**
    [genre] : number; // playTimes
    e.g.
    [classic] : 2000 plays
    [pop] : 1000 plays
    */
// }

// const songsOfEachGenre = {
    /**
        [genre] : array[]song;
    */
// }

// const song = {
    /**
    id : number;
    plays: number;
    genre: 'classic';
    genreTotal: record[this.genre];
    */
// }

const playRecord = {};
const songsOfEachGenre = {};

function getTop2Songs(genre) {
    const songs = songsOfEachGenre[genre];

    if (!Array.isArray(songs)) return [];
    
    songs.sort((a,b) => {
        if (a.plays === b.plays) return a.id - b.id;
        return b.plays - a.plays;
    });
    
    const ret = [];
    if (songs[0]) ret.push(songs[0].id);
    if (songs[1]) ret.push(songs[1].id); 

    return ret;
}
class Song {
    constructor(id, plays, genre) {
        this.id =id;
        this.plays = plays;
        this.genre = genre;
    }
    
    get genreTotal() {return playRecord.genre};
}

function solution(genres, plays) {
    plays.forEach((play, id) => {
        const genre = genres[id];
        const song = new Song(id, play, genre);
        if (playRecord[genre]) playRecord[genre] += play;
        else playRecord[genre] = play;
        if (songsOfEachGenre[genre]) songsOfEachGenre[genre].push(song);
        else songsOfEachGenre[genre] = [song];
    });
    
    const answer = [];
    const bestGenre = [...Object.entries(playRecord)];
    bestGenre.sort((a,b) => {
        return b[1] - a[1];
    });
    bestGenre.forEach((genre) => {
        answer.push(...getTop2Songs(genre[0]));
    }); 
    
    return answer;
}