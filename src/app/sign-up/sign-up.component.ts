import { Component, OnInit } from '@angular/core';
import {User} from "../model/user";
import {UsersService} from "../shared/users.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  user: User = new User()

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
  }

  signup() {
    console.log(this.user)
    this.usersService.createUser(this.user).subscribe(data => {
      console.log("signup")
      this.router.navigate(['login'])
    })
  }

}
