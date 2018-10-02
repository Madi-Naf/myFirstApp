import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  userEmail:string;
  constructor() {
    this.userEmail = "momojoue@league.un"
   }

  ngOnInit() {
  }

}
