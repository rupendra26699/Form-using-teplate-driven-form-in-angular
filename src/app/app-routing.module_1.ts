import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { SuccessComponent } from './success/success.component';

const routes: Routes = [
  {path:'' , redirectTo : 'home' , pathMatch : 'full'},
  {path: 'home' ,component : HomeComponent},
  {path: 'services' ,component : ServicesComponent },
  {path: 'aboutus' ,component : AboutComponent },
  {path: 'contactus' ,component : ContactComponent },
  {path: 'success' , component:SuccessComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
