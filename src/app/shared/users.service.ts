import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../model/user";
import {Userdto} from "../model/userdto";
import {Token} from "../model/token";

@Injectable({providedIn: 'root'})
export class UsersService {
  private baseURL = "http://localhost:8080"

  constructor(private http: HttpClient) { }

  getUserAndLogin(userDto: Userdto) {
    /*const headers = new HttpHeaders(userDto.email ? {
      authorization : 'Basic ' + btoa(userDto.email + ':' + userDto.password)
    } : {});*/
    console.log(userDto)
    return this.http.post<Token>(`${this.baseURL}/auth/login`, userDto)
  }

  createUser(user: User) {
    return this.http.post(`${this.baseURL}/auth/create`, user)
  }
}
