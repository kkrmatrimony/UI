import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { InfoDialogComponent } from './info-dialog/info-dialog.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { profileTableComponent } from './components/profile-table/profile-table.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { SubscriberHomeTableComponent } from './components/subscriber-home-table/subscriber-home-table.component';
import { MaterialModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    InfoDialogComponent,
    ForgotPasswordComponent,
    profileTableComponent,
    SubscriberHomeTableComponent,
    CarouselComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
  ],
  providers: [],
  exports: [
    HeaderComponent,
    FooterComponent,
    InfoDialogComponent,
    profileTableComponent,
    SubscriberHomeTableComponent,
    CarouselComponent
  ],
})
export class SharedModule {}
