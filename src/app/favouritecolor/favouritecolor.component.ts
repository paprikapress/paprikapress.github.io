import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-favorite-color',
  templateUrl: './favouritecolor.component.html',
  styleUrls: ['./favouritecolor.component.scss']

})
export class FavoritecolorComponent {
  favoriteColorControl = new FormControl('');
  reactiveForm = new FormGroup({
    firstname: new FormControl('',[Validators.required]),
    lastname: new FormControl(),
    email: new FormControl(),
    password: new FormControl()
  })
  constructor() {


  }

  ngOnInit(): void {
  }
  submit(){

    console.log("Form Submitted! You entered:"  + this.reactiveForm.value.firstname )
    alert("Your answer:"  + JSON.stringify(this.reactiveForm.value) )
    // alert("this.reactiveForm.value:"  + JSON.stringify(this.reactiveForm.value) )
  }

  reset() {
    console.log("Form Reset !")

  }
}


