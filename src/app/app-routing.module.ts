import { EventDetailPage } from './pages/event-detail/event-detail.page';
import { MemberAreaPage } from './pages/member-area/member-area.page';
import { EventsPage } from './pages/events/events.page';
import { GalleryPage } from './pages/gallery/gallery.page';
import { LoginPage } from './pages/login/login.page';
import { ContactPage } from './pages/contact/contact.page';
import { PrayersPage } from './pages/prayers/prayers.page';
import { PreachingsPage } from './pages/preachings/preachings.page';
import { ActivitiesPage } from './pages/activities/activities.page';
import { BeliefsPage } from './pages/beliefs/beliefs.page';
import { AboutUsPage } from './pages/about-us/about-us.page';
import { HomePage } from './pages/home/home.page';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePage
  },
  {
    path: 'quem-somos',
    component: AboutUsPage
  },
  {
    path: 'em-que-cremos',
    component: BeliefsPage
  },
  {
    path: 'atividades',
    component: ActivitiesPage
  },
  {
    path: 'pregacoes',
    component: PreachingsPage
  },
  {
    path: 'oracoes',
    component: PrayersPage
  },
  {
    path: 'contato',
    component: ContactPage
  },
  {
    path: 'login',
    component: LoginPage
  },
  {
    path: 'galeria',
    component: GalleryPage
  },
  {
    path: 'eventos',
    component: EventsPage
  },
  {
    path: 'area-do-membro',
    component: MemberAreaPage
  },
  {
    path: 'evento-detalhe',
    component: EventDetailPage
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
