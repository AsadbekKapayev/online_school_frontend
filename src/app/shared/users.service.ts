import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../model/user";

@Injectable({providedIn: 'root'})
export class UsersService {
  private baseURL = "http://localhost:8080"

  constructor(private http: HttpClient) { }

  getUserAndLogin(email: string, password: string) {
    const headers = new HttpHeaders(email ? {
      authorization : 'Basic ' + btoa(email + ':' + password)
    } : {});
    return this.http.get(`${this.baseURL}/student/list`, {headers})
  }

  createUser(user: User) {
    return this.http.post(`${this.baseURL}/auth/create`, user)
  }
}
