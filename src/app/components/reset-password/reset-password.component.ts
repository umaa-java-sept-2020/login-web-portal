import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  hide1 : boolean = false;
  hide2 : boolean = true;
  constructor() { }

  ngOnInit(): void {
  }

  hideDiv(){
      this.hide1 = true;
      this.hide2 = false;
  }

}
