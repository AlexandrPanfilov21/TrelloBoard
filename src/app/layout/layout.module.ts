import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FooterComponent } from './components/footer/footer.component';
import { RouterOutlet } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';
import { LoginModule } from '../login/login.module';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    RouterOutlet,
    AppRoutingModule,
    LoginModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
  ],
})
export class LayoutModule {
}
