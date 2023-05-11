import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserRoutingModule } from './user-routing.module';
import { DiseasesComponent } from './pages/diseases/diseases.component';
import { TalkToDoctorComponent } from './pages/talk-to-doctor/talk-to-doctor.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { HomeComponent } from './pages/home/home.component';
import { MaterialModule } from '../material/material.module';
import { ExploreComponent } from './pages/home/explore/explore.component';
import { HttpClientModule } from '@angular/common/http';
import { ExploremoreComponent } from './pages/home/exploremore/exploremore.component';
import { LearnmoreComponent } from './pages/home/learnmore/learnmore.component';
import { EnquiryFormComponent } from './pages/home/enquiry-form/enquiry-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeedbackBoxComponent } from './pages/testimonials/feedback-box/feedback-box.component';
import { FeedbackFormComponent } from './pages/testimonials/feedback-form/feedback-form.component';
import { DiseasesNameComponent } from './pages/diseases/diseases-name/diseases-name.component';
import { DiseasesDetailsComponent } from './pages/diseases/diseases-details/diseases-details.component';
import { FilterPipe } from './filter.pipe';
import { ActivatedRoute } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';






@NgModule({
    declarations: [
        HomeComponent,
        DiseasesComponent,
        TalkToDoctorComponent,
        TestimonialsComponent,
        ExploreComponent,
        ExploremoreComponent,
        LearnmoreComponent,
        EnquiryFormComponent,
        FeedbackBoxComponent,
        FeedbackFormComponent,
        DiseasesNameComponent,
        DiseasesDetailsComponent,
        FilterPipe,
       
    ],
    imports: [
        CommonModule,
        UserRoutingModule,
        MaterialModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,      
    ],
    exports:[DiseasesComponent]
})
export class UserModule { }
