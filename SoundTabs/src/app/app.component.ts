import { Component, EnvironmentInjector } from '@angular/core';
import { inject } from '@angular/core/testing';
import { NativeAudio } from '@capacitor-community/native-audio';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  // public enviromentInjector = inject(EnvironmentInjector);
  constructor() {
    this.preLoadAudio()
  }

  async preLoadAudio(){
    NativeAudio.preload({
      assetId: "Notification",
      assetPath: "Notification.wav",
      audioChannelNum: 1,
      isUrl: false
  });
  }
}
