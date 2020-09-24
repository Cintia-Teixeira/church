import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Home',
      url: '/home'
    },
    {
      title: 'Quem somos',
      url: '/quem-somos'
    },
    {
      title: 'Em que cremos',
      url: '/em-que-cremos'
    },
    {
      title: 'Atividades',
      url: '/atividades'
    },
    {
      title: 'Pregações',
      url: '/pregacoes'
    },
    {
      title: 'Galeria',
      url: '/galeria'
    },
    {
      title: 'Eventos',
      url: '/eventos'
    },
    {
      title: 'Motivos de oração',
      url: '/oracoes'
    },
    {
      title: 'Contato',
      url: '/contato'
    },
    {
      title: 'Login',
      url: '/login'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '').replace(/[^\w\-]+/g, '-')
      .toLowerCase() === path.toLowerCase());
    }
  }
}
