import ytdl from "ytdl-core";
import fs from "fs";

export const download = (videoId) => {
    const videoUrl = "https://www.youtube.com/shorts/" + videoId;
    console.log(videoUrl);
    ytdl(videoUrl, {quality: "lowestaudio", filter: "audioonly"}).
    on("info",
        (info) => {
            const seconds = info.videoDetails.lengthSeconds;
            if(seconds > 60) {  
                throw new Error("Video is too long");
            }
            console.log(seconds);
        }
    ).on("end", () => {
        console.log("Download finished");
    }).on("error", (err) => {
        console.log(err);
    }).pipe(fs.createWriteStream("./tmp/audio.mp4"));
}