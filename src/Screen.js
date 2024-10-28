import React from "react";
import Menu from "./components/Menu";

import Songlist from "./songList";
class Screen extends React.Component{
    render(){
        const {song_index,options,selectOption,AllSongs,songsUrl,songs_list_Screen,music_screen,song_ref} = this.props;
        // console.log(options.length);
        
        return(
            <>
                <div className="screen-container">
                    <Menu 
                    options = {options}
                    selectOption ={selectOption}
                    />
                    {songs_list_Screen ?
                    
                    <Songlist
                        AllSongs ={AllSongs}
                        songsUrl = {songsUrl}
                        songs_list_Screen = {songs_list_Screen}
                        music_screen = {music_screen}
                        song_index = {song_index}
                        song_ref= {song_ref}
                    />:""}
                </div>
            </>
        )
    }

}
export default Screen;