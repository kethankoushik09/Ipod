import React from "react";
import Music from "./Music";

class Songlist extends React.Component {
    render() {
        const { AllSongs, songsUrl, songs_list_Screen, music_screen, song_index,song_ref } = this.props;

        return (
            <>
                {music_screen && (
                    <Music
                        songsUrl={songsUrl}
                        song_index={song_index}
                        AllSongs={AllSongs}
                        song_ref = {song_ref}
                    />
                )}

                {songs_list_Screen && (
                    <div className="sng-container">
                        <div className="all-songs-heading">
                            <h1>All Songs</h1>
                        </div>
                        {AllSongs.map((item, indx) => (
                            <div key={indx} className={song_index === indx ? "sel-song" : "song"}>
                                <h3>{item}</h3>
                            </div>
                        ))}
                        <div className="guide">
                            Click &nbsp;<i className="fa-solid fa-backward"></i> and &nbsp;<i className="fa-solid fa-forward"></i>
                            &nbsp;for Navigation
                        </div>
                    </div>
                )}
            </>
        );
    }
}
export default Songlist;