import { Component, OnInit } from '@angular/core';
import {UsersService} from "../shared/users.service";
import {Router} from "@angular/router";
import {HttpHeaders} from "@angular/common/http";
import {Userdto} from "../model/userdto";
import {Token} from "../model/token";
import {Globalvar} from "../model/globalvar";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {

  userDto: Userdto = new Userdto()
  token: Token

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.userDto.email + " " + this.userDto.password)
    this.usersService.getUserAndLogin(this.userDto).subscribe(response => {
      this.token = response
      Globalvar.token = this.token
      this.router.navigate(['students'])
    });

  }

}
