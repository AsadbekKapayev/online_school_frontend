import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, tap} from "rxjs";
import {Student} from "../model/student";

@Injectable({providedIn: 'root'})
export class StudentsService {
  private baseURL = "http://localhost:8080/student"

  constructor(private http: HttpClient) { }

  /*fetchStudents(): Observable<Student[]> {
    return this.http.get<Student[]>('http://localhost:8080/student/list')
      .pipe(tap(students => this.students = students))
  }*/

  getStudentList(): Observable<Student[]> {
    const headers = new HttpHeaders({authorization : 'Basic ' + btoa("admin@gmail.com" + ':' + "admin")});
    return this.http.get<Student[]>(`${this.baseURL}/list`, {headers})
  }

  createStudent(student: Student) {
    const headers = new HttpHeaders({authorization : 'Basic ' + btoa("admin@gmail.com" + ':' + "admin")});
    return this.http.post(`${this.baseURL}/create`, student, {headers})
  }

  removeStudent(id: number) {
    const headers = new HttpHeaders({authorization : 'Basic ' + btoa("admin@gmail.com" + ':' + "admin")});
    return this.http.delete(`${this.baseURL}/delete/${id}`, {headers})
  }
}
