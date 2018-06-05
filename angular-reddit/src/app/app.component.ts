import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  form: FormGroup;
  title: AbstractControl;
  link: AbstractControl;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      title: [
        '',
        Validators.compose([Validators.required, Validators.minLength(5)])
      ],
      link: [
        '',
        Validators.compose([
          Validators.required,
          Validators.pattern(
            /^((https?|ftp|file):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/
          )
        ])
      ]
    });

    this.title = this.form.controls['title'];
    this.link = this.form.controls['link'];
  }
  addArticle(): void {
    alert(this.title.value);
  }
}
