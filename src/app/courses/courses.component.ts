import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent {
  
  appName: string = "Courses App" 

  // onKeyUp($event:any) {
  //   console.log("entered", $event.target.value)
  // }

  // onKeyUp(email:any) {
  //   console.log(email);
  // }
  email:string = "me@example.com";

  onKeyUp() {
    console.log(this.email)
  }
}
