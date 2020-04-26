import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SegundaPageRoutingModule } from './segunda-routing.module';

import { SegundaPage } from './segunda.page';
import { NgxMaskModule, IConfig } from 'ngx-mask'
export var options: Partial<IConfig> | (() => Partial<IConfig>);
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SegundaPageRoutingModule,
    NgxMaskModule.forRoot(),
    
  ],
  declarations: [SegundaPage]
})
export class SegundaPageModule {}
