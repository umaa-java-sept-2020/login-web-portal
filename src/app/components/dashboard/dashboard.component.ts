import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute) { }
  token!: string;
  ngOnInit(): void {
    console.log(this.route.snapshot.params['userName']);


  }

  logout(){
    localStorage.removeItem('token');
    localStorage.removeItem('bearerToken');
    this.router.navigate(["/login"])

  }

  redirectTo(){
    this.token = this.route.snapshot.params['token'];
    console.log(this.token);
    document.location.href = 'http://localhost:4200?token='+this.token;
    
  }
}
