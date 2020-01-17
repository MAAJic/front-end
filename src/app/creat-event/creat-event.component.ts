// import { Component, OnInit } from '@angular/core';  
// import { FormControl } from '@angular/forms';

// @Component({  
//   selector: 'app-create-event',  
//   templateUrl: './create-event.component.html',  
//   styleUrls: ['./create-event.component.scss']  
// })  

// export class  CreateEventComponent implements OnInit  {  
  
//   ngOnInit() {
//   }
  
//   constructor(){

//   }

// }  

// import { ConnectionService } from './connection.service';
import { FormGroup, FormBuilder, Validators, NgForm, FormsModule} from '@angular/forms';
import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-creat-event',  
  templateUrl: './creat-event.component.html',  
  styleUrls: ['./creat-event.component.scss'],
  providers: []
})
export class CreatEventComponent {

// contactForm: FormGroup;
// disabledSubmitButton: boolean = true;
// optionsSelect: Array<any>;

//   @HostListener('input') oninput() {

//   if (this.contactForm.valid) {
//     this.disabledSubmitButton = false;
//     }
//   }

  // constructor(private fb: FormBuilder) {

  // this.contactForm = fb.group({
  //   'contactFormName': ['', Validators.required],
  //   'contactFormEmail': ['', Validators.compose([Validators.required, Validators.email])],
  //   'contactFormSubjects': ['', Validators.required],
  //   'contactFormMessage': ['', Validators.required],
  //   'contactFormCopy': [''],
  //   });
  // }

    onSubmit(form: NgForm) {

      console.log(form.value);
    }

  }
