import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuartaPageRoutingModule } from './quarta-routing.module';

import { QuartaPage } from './quarta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuartaPageRoutingModule
  ],
  declarations: [QuartaPage]
})
export class QuartaPageModule {}
