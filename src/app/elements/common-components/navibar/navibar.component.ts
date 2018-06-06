import { Component, OnInit } from '@angular/core';
import { LocalStorageUtils } from 'src/app/elements/utils/localstorage.utils';


@Component({
  selector: 'app-navibar',
  templateUrl: './navibar.component.html',
  styleUrls: ['./navibar.component.css']
})
export class NavibarComponent implements OnInit {

  currentLocale: string;
  availableLanguages: string[];

  constructor() { }

  ngOnInit() {
    const currentLang = LocalStorageUtils.getCurrentLanguage();
    if (currentLang) {
      this.currentLocale = currentLang;
    } else {
      this.currentLocale = 'en';
    }

    this.availableLanguages = ['en', 'vi'];
  }

  setSelectedLanguage(selectedLanguage: string) {
    this.currentLocale = selectedLanguage;
    LocalStorageUtils.setCurrentLanguage(selectedLanguage);
  }

}
