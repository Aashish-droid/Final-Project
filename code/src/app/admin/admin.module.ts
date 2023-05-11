import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { TalkToPatientComponent } from './pages/talk-to-patient/talk-to-patient.component';
import { MaterialModule } from '../material/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddDiseasesComponent } from './pages/add-diseases/add-diseases.component';
import { DiseasesComponent } from '../user/pages/diseases/diseases.component';
import { UserModule } from '../user/user.module';


@NgModule({
  declarations: [
    AdminComponent,
    TalkToPatientComponent,
    AddDiseasesComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    UserModule
    
  ]
})
export class AdminModule { }
