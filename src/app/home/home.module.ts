import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ServicesComponent } from './services/services.component';
import { HomeRoutingModule } from './home-routing.module';
import { HomeService } from './home.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material.module';

@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
    ServicesComponent,
  ],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, HomeRoutingModule,MaterialModule],
  providers: [HomeService],
})
export class HomeModule {}
