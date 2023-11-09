import { Component } from '@angular/core';
import { NativeAudio } from '@capacitor-community/native-audio';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {
  
  isTabChanged = false;

  constructor() {}

  setCurrentTab(event:any){
     console.log(event)
     this.playAudio();
  }

  async playAudio(){
   if (this.isTabChanged) {
    await NativeAudio.play({
      assetId: 'Notification',
      // time: 6.0 - seek time
  });
   } else {
    this.isTabChanged = true;
   }
  }

}
