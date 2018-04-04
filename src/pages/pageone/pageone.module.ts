import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PageonePage } from './pageone';

@NgModule({
  declarations: [
    PageonePage,
  ],
  imports: [
    IonicPageModule.forChild(PageonePage),
  ],
})
export class PageonePageModule {}
