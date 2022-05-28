import { Component, OnInit } from '@angular/core';
import {UsersService} from "../shared/users.service";
import {Router} from "@angular/router";
import {HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  email: string = ''
  password: string = ''

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.email + " " + this.password)
    this.usersService.getUserAndLogin(this.email, this.password).subscribe(response => {
      this.router.navigate(['students'])
    });

  }

}
