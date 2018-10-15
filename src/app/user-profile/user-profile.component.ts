import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  
  public classHidden:string ="";
  public hidden:boolean = false ;

  public User = {
    name : 'charlotte',
    firstName : 'katakuri',
    age : 48,
    quote : 'Son dos n\'a jamais toucher le sole depuis qu\'il est née. lol',
    photo : 'https://orig00.deviantart.net/6907/f/2017/218/6/f/katakuri_by_ex_kyumea-dbj1lrl.png'
  };

  constructor() { }

  ngOnInit() {
  }
  public isHidden(){
    if (this.hidden){
      this.classHidden = "no-hidden";
      this.hidden = false ;
    }else{
      this.classHidden = "is-hidden";
      this.hidden = true ;
    }
  }
}
