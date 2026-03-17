class Art {
    constructor(){
        // this.color = color,
        // this.size = size,
        // this.artist = artist
    }

    details(){
        // console.log(this.color + this.size + this.artist)
        console.log("This is bullshit")
    }
}

const artist1 = new Art();

artist1.details()


class Music {
    constructor(Artist, length, format, title){
        this.Artist = Artist;
        this.length = length;
        this.format = format;
        this.title = title;
    }

    artistName(){
        console.log(this.Artist)
    }
    
    musicFormat(){
        console.log(this.format)
    }
}

const music1 = new Music("Joey B", 55, "mp3", "Something Something");
const music2 = new Music("Tipper", 45, "vinyl", "Head theory")

music1.artistName();
music1.musicFormat();

music2.artistName();
music2.musicFormat();