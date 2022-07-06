import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';


@Component({
  selector: 'app-contact-us-form',
  templateUrl: './contact-us-form.component.html',
  styleUrls: ['./contact-us-form.component.css']
})
export class ContactUsFormComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  fromCompleted = false;
  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.form = this.formBuilder.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      title: ['', [Validators.required]],
      message: ['', [Validators.required]],
    })
  }
  get f():any { return this.form.controls; }
  ngOnInit(): void {
  }
  onSubmit() {
    this.submitted= true;
    if (this.form.valid) {
      this.fromCompleted = true;
    }
  }
}
