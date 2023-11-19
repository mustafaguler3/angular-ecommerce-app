import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeaderComponent } from './components/header/header.component';
import { SideNavigationComponent } from './components/side-navigation/side-navigation.component';
import { ProductComponent } from './components/product/product.component';



@NgModule({
  declarations: [
    HomeComponent,
    NavigationComponent,
    HeaderComponent,
    SideNavigationComponent,
    ProductComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
