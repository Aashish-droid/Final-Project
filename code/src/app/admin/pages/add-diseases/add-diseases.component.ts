import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ServicesService } from 'src/app/services.service';

@Component({
  selector: 'app-add-diseases',
  templateUrl: './add-diseases.component.html',
  styleUrls: ['./add-diseases.component.css']
})
export class AddDiseasesComponent {
    diseaseForm: FormGroup;
    
    constructor(private fb: FormBuilder, private service: ServicesService) {
      this.diseaseForm = this.fb.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      medicine: ['', Validators.required]
      });
    }
  
    saveDisease() {
      if (this.diseaseForm.valid) {
        const disease = {
          id: 'D' + Math.floor(Math.random() * 931 + 70),
          title: this.diseaseForm.value.title,
          description: this.diseaseForm.value.description,
          medicine: this.diseaseForm.value.medicine
        };
        this.service.postDiseases(disease).subscribe(
          (response) => {
            console.log(response);
            alert('Disease saved successfully!');
            this.diseaseForm.reset();
          },
          (error) => {
            console.log(error);
            alert('Error occurred while saving disease!');
          }
        );
      }
    }
  }
