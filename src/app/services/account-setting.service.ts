import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountSettingService {

  private linkTheme = document.querySelector('#theme');

  constructor() {
    const url = localStorage.getItem('theme')|| `./assets/css/colors/default-dark.css`;

    this.linkTheme.setAttribute('href', url);
  }
  changeTheme(theme:string){    
   
    
    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme.setAttribute('href', url);

    localStorage.setItem('theme',url);
    
    this.checkCurrentTheme();
  }
  checkCurrentTheme(){
    const links = document.querySelectorAll('.selector');
    links.forEach(item => {
      item.classList.remove('working');

      const btnTheme = item.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme.getAttribute('href');
      if(btnThemeUrl === currentTheme){
        item.classList.add('working');
      }
    });
  }
}
