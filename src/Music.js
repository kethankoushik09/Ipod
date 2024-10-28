import React from "react";
import sid from "./sid.jpg"
class Music extends React.Component{
    render(){
        const {songsUrl,song_index,AllSongs,song_ref} = this.props;

        return(
            <>
                <div className="music-container">
                    <div>
                        <h3>{AllSongs[song_index]}</h3>
                    </div>

                    <div>
                        <img className="sid" src={sid} alt="sid"/>
                    </div>
                    <audio ref ={song_ref} src={songsUrl[song_index]} controls>

                    </audio>


                </div>
            </>
        )
    }
}
export default Music;