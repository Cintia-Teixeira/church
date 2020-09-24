import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MemberAreaPageRoutingModule } from './member-area-routing.module';

import { MemberAreaPage } from './member-area.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MemberAreaPageRoutingModule
  ],
  declarations: [MemberAreaPage]
})
export class MemberAreaPageModule {}
