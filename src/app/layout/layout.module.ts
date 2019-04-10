import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { LeftNavComponent } from './left-nav/left-nav.component';
import { LayoutComponent } from './layout.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [HeaderComponent, LeftNavComponent, LayoutComponent, FooterComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [LayoutComponent]
})
export class LayoutModule { }
