import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DiseasesComponent } from './pages/diseases/diseases.component';
import { TalkToDoctorComponent } from './pages/talk-to-doctor/talk-to-doctor.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { UserComponent } from './user.component';
import { ExploremoreComponent } from './pages/home/exploremore/exploremore.component';
import { LearnmoreComponent } from './pages/home/learnmore/learnmore.component';
import { DiseasesDetailsComponent } from './pages/diseases/diseases-details/diseases-details.component';
import { LoginComponent } from '../login/login.component';

const routes: Routes = [
  {path:'',component:UserComponent,
  children : [
    {path: '', redirectTo: '/home', pathMatch: 'full' },
    {path:'home',component:HomeComponent},
    {path:'diseases',component:DiseasesComponent},
    {path:'talk-to-doctor',component:TalkToDoctorComponent},
    {path:'testimonials',component:TestimonialsComponent},
    {path:'learnmore/:id',component:LearnmoreComponent},
    {path:'exploremore/:id',component:ExploremoreComponent},
    {path:'di/:id',component:DiseasesDetailsComponent}
  ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
