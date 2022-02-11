import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CreateUser } from 'src/app/models/createUser.model';
import { CreateUserService } from 'src/app/services/createUser.service';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  createUserModel : CreateUser = new CreateUser();
  hide1: boolean = false;
  hide2: boolean = true;
  confirmPassword : string = "";
  constructor(private createUserService : CreateUserService , private router : Router) { }

  ngOnInit(): void {
    // this.createUserModel.
  }
  createUser(){
    this.createUserService.createUser(this.createUserModel).subscribe((data : any  ) => {
      console.log(data);

      sessionStorage.removeItem('token');
      this.router.navigate(["/login"])
    },error  =>
      console.error(error.error.message+" "+error.error.details)
    );
  }
  hideDiv(){
    this.hide1 = true;
    this.hide2 = false;
}

}
