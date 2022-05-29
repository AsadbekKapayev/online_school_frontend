import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {Student} from "../model/student";
import {Token} from "../model/token";
import {Globalvar} from "../model/globalvar";

@Injectable({providedIn: 'root'})
export class StudentsService {
  private baseURL = "http://localhost:8080/student"
  token: Token = new Token()

  constructor(private http: HttpClient) {
    this.token = Globalvar.token
    console.log(this.token.token + " is created")
  }

  getStudentList(): Observable<Student[]> {
    const headers = new HttpHeaders({Authorization: this.token.token});
    return this.http.get<Student[]>(`${this.baseURL}/list`, {headers})
  }

  createStudent(student: Student) {
    const headers = new HttpHeaders({Authorization: this.token.token});
    return this.http.post(`${this.baseURL}/create`, student, {headers})
  }

  removeStudent(id: number) {
    const headers = new HttpHeaders({Authorization: this.token.token});
    return this.http.delete(`${this.baseURL}/delete/${id}`, {headers})
  }
}
