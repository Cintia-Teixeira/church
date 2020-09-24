import { MemberAreaPageRoutingModule } from './pages/member-area/member-area-routing.module';
import { MemberAreaPage } from './pages/member-area/member-area.page';
import { LoginPage } from './pages/login/login.page';
import { ContactPage } from './pages/contact/contact.page';
import { PrayersPage } from './pages/prayers/prayers.page';
import { GalleryPage } from './pages/gallery/gallery.page';
import { PreachingsPage } from './pages/preachings/preachings.page';
import { ActivitiesPage } from './pages/activities/activities.page';
import { BeliefsPage } from './pages/beliefs/beliefs.page';
import { AboutUsPage } from './pages/about-us/about-us.page';
import { EventsPage } from './pages/events/events.page';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsPage,
    BeliefsPage,
    ActivitiesPage,
    PreachingsPage,
    GalleryPage,
    EventsPage,
    PrayersPage,
    ContactPage,
    LoginPage,
    MemberAreaPage
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    CommonModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    MemberAreaPageRoutingModule,
    HttpClientModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
