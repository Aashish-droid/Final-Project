import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { TalkToPatientComponent } from './pages/talk-to-patient/talk-to-patient.component';
import { AddDiseasesComponent } from './pages/add-diseases/add-diseases.component';



const routes: Routes = [
  {path:'',component:AdminComponent,
  children:[
    {path:'lolo',component:TalkToPatientComponent},
    {path:'gogo',component:AddDiseasesComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
