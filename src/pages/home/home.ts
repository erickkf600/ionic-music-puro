import { Component } from '@angular/core';
import { NavController, IonicPage} from 'ionic-angular';
import { AudioProvider } from 'ionic-audio';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  myTracks: any[];
  singleTrack: any;
  allTracks: any[];
  selectedTrack: number;

  constructor(public navCtrl: NavController, private _audioProvider: AudioProvider) {
    this.myTracks = [{
      src: 'https://archive.org/download/JM2013-10-05.flac16/V0/jm2013-10-05-t12-MP3-V0.mp3',
      artist: 'John Mayer',
      title: 'Why Georgia',
      art: 'assets/img/johnmayer.jpg',
      preload: 'metadata'
    },
    {
      src: 'https://archive.org/download/JM2013-10-05.flac16/V0/jm2013-10-05-t30-MP3-V0.mp3',
      artist: 'John Mayer',
      title: 'Who Says',
      art: 'assets/img/johnmayer.jpg',
      preload: 'metadata'
    }];

    this.singleTrack = {
      src: 'https://archive.org/download/swrembel2010-03-07.tlm170.flac16/swrembel2010-03-07s1t05.mp3',
      artist: 'Stephane Wrembel',
      title: 'Stephane Wrembel Live',
      art: 'assets/img/Stephane.jpg',
      preload: 'metadata'
    };
  }

  ngAfterContentInit() {     
    this.allTracks = this._audioProvider.tracks; 
  }
  
  playSelectedTrack() {
    this._audioProvider.play(this.selectedTrack);
  }
  
  pauseSelectedTrack() {
     this._audioProvider.pause(this.selectedTrack);
  }
         
  onTrackFinished(track: any) {
    console.log('Track finished', track)
  }


}
