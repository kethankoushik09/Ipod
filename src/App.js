// import logo from './logo.svg';
// import './App.css';
import React from "react";
import './index.css'
import Screen from "./Screen";
import Button from "./Button";
import ZingTouch from 'zingtouch';
import game from "./game.jpg"
import settings from "./settings.jpg"
import sd from "./cf.jpg"
import album from "./album.jpg" 
import artst from "./artist.jpg"
import samajavaramana from "./Songs/Samajavaragamana .mp3"
import kalavathi from "./Songs/Kalaavathi.mp3"
import paruyan from "./Songs/Parayuvan.mp3"
import maruvathi from "./Songs/Maruvaarthai.mp3"
import leharaayi from "./Songs/Leharaayi.mp3"
import uyire from "./Songs/Uyire.mp3"


class App extends React.Component{
  constructor(){
    super();
    this.song_ref = React.createRef();
    this.temp_change_angle = 0;
    this.temp_currentoption = 0;
    this.state={
      options:["Games","Music","Settings","CoverFlow"],
      change_angle:0,
      current_option :0,
      general_menu :["Games","Music","Settings","CoverFlow"],
      songs_sub_menu : ["All Songs","Artists","Albums"],
      all_songs:["samajavaramana.mp3","kalavathi.mp3","uriye.mp3","parayuvan.mp3","maruvaarthai.mp3",
        "leharayi.mp3"],
      songs_link:[samajavaramana,kalavathi,uyire,paruyan,maruvathi,leharaayi],
      current_music_selection:0,
      img:[game,,settings,sd,artst,album],
      song_index : 0,
      songs_list_screen: false,
      music_screen:false,
      playing_music : false

    };
  }
  componentDidMount()
    {
        var zt = new ZingTouch.Region(document.querySelector('.button-container'));
        zt.bind(document.querySelector('.button-container'), 'rotate', (event) =>
        {
            if (document.querySelector('.menu-container').classList.contains('width-50'))//this rotating facility will only be available when the side bar is shown to the user.
            {
                let dist = event.detail.distanceFromLast;
                this.temp_change_angle += dist;
                if (this.temp_change_angle > 60)
                {
                    this.temp_currentoption++;
                    this.temp_currentoption = this.temp_currentoption % this.state.options.length;
                    this.setState({
                      current_option: this.temp_currentoption,
                        // song_index: -1
                    });
                    this.temp_change_angle = 0;
                }
                else if (this.temp_change_angle < -60)
                {
                    this.temp_currentoption--;
                    if (this.temp_currentoption === -1)
                        this.temp_currentoption = this.state.options.length - 1;

                    this.temp_currentoption = this.temp_currentoption % this.state.options.length;
                    this.setState({
                      current_option: this.temp_currentoption,
                    });
                    this.temp_change_angle = 0;
                }
            }

        });
    }
  menuButtonSelector = () =>{
    const menuclassList = document.querySelector(".menu-container").classList;
    if(menuclassList.contains("width-50")){
      menuclassList.remove("width-50");
    }
    else{
      menuclassList.add("width-50");
    }
  }
  selectButtonClicked = () =>{
    if(document.querySelector(".button-container").classList.contains("btn-animi")){
      document.querySelector(".button-container").classList.remove("btn-animi")
    }
    console.log(this.state.songs_list_screen , this.state.options.length);
    console.log(this.state.current_option === 0);
    if(!document.querySelector(".menu-container").classList.contains("width-50")){
      if(this.state.songs_list_screen && !this.state.music_screen){
          console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiiiinnnnnnnnnn");
          this.setState({
            songs_list_screen:true,
            music_screen:true,
            playing_music:true
          },() =>{
            console.log("2222");
            this.pause_play();
          })
        }
      return;
    }
    if(this.state.options.length === 4 && this.state.current_option === 1){
      this.setState({
        options:this.state.songs_sub_menu,
        current_option :0,
      })
      return;
    }
    const Screen = document.querySelector(".screen-container");
    
    if(this.state.options.length === 3 && this.state.current_option === 0){
       this.setState({
        music_screen:false,
        songs_list_screen: true,
        song_index:0,
        playing_music:false
        
       })
      this.menuButtonSelector();
      return;
    }
    const {img,current_option} =this.state;
    if(this.state.songs_list_screen){
      this.change_all_songs();
    }
    if(this.state.options.length == 4){
      Screen.style.backgroundImage = `url(${img[current_option]})`;
    }
    if (this.state.options.length == 3) {
      Screen.style.backgroundImage = `url(${img[current_option+3]})`;  
    }
    this.menuButtonSelector();
  }
  backButtonClicked = () =>{
    if(document.querySelector(".button-container").classList.contains("btn-animi")){
      document.querySelector(".button-container").classList.remove("btn-animi")
    }

    if(this.state.options.length === 3 && document.querySelector('.menu-container').classList.contains('width-50')){
      this.setState({
        options: this.state.general_menu,
        current_option:0
      })

    }
    if(this.state.songs_list_screen && !document.querySelector('.menu-container').classList.contains('width-50')){
      const {song_index,all_songs} =this.state;
      console.log("incre");
      
      if(song_index == 0){
        this.setState({
          song_index :all_songs.length-1,
          playing_music:false

        })
      }
      else{
        this.setState({
          song_index :song_index-1,
          playing_music:false

        })
      }
    }

  }
  forwardButtonClicked = ()=>{
    if(document.querySelector(".button-container").classList.contains("btn-animi")){
      document.querySelector(".button-container").classList.remove("btn-animi")
    }
    if(this.state.songs_list_screen && !document.querySelector('.menu-container').classList.contains('width-50')){
      const {song_index,all_songs} =this.state;
      console.log("incre");
      
      if(song_index>=(all_songs.length-1)){
        this.setState({
          song_index :0,
          playing_music:false
        })
      }
      else{
        this.setState({
          song_index :song_index+1,
          playing_music:false

        })
      }
    }
  }
  change_all_songs = ()=>{
    if(this.state.songs_list_screen){
      this.setState({
        songs_list_screen :false,
        music_screen :false,
        playing_music :false

      })
    }
    else{
      this.setState({
        music_screen :false,
        playing_music :false

      })

    }
  }
  pause_play = () =>{
    console.log(this.state.playing_music);
    const butn = document.querySelector(".button-container");
    
    if(!this.state.music_screen || document.querySelector('.menu-container').classList.contains('width-50')){
      console.log("kkkkkkkkk");
      
      return;
    }
    const audio = this.song_ref.current
    console.log("hhhh");
    if(this.state.music_screen && !butn.classList.contains("btn-animi")){      
      butn.classList.add("btn-animi")
      audio.play();
      this.setState({
        playing_music:true
      })

    }
    else{
      butn.classList.remove("btn-animi")
      audio.pause();
      this.setState({
        playing_music:false
      })
    }
  }
  render(){
    return(
      <>
        <div className='bg-clr'>
           <div className="ipod-bg-color">
              <Screen 
              options = {this.state.options}
              selectOption ={this.state.current_option}
              AllSongs = {this.state.all_songs}
              songsUrl = {this.state.songs_link}
              songs_list_Screen = {this.state.songs_list_screen}
              music_screen = {this.state.music_screen}
              song_index = {this.state.song_index}
              song_ref= {this.song_ref}
              />
              <Button  
              menu = {this.menuButtonSelector}
              selectBtn = {this.selectButtonClicked}
              backBtn = {this.backButtonClicked}
              forBtn = {this.forwardButtonClicked}
              pp = {this.pause_play}
                
              />

           </div>
        </div>
      </>
    )
  }
}

export default App;
