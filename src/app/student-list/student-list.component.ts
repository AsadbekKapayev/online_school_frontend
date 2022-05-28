import { Component, OnInit } from '@angular/core';
import {StudentsService} from "../shared/students.service";
import {Student} from "../model/student";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  student: Student = new Student();

  students: Student[] = []

  constructor(private studentsService: StudentsService) { }

  ngOnInit(): void { this.getStudents() }

  private getStudents() {
    this.studentsService.getStudentList().subscribe(data => {
      this.students = data
    })
  }

  createStudent() {
    this.studentsService.createStudent(this.student).subscribe(data => {
      this.getStudents()
    })

  }

  removeStudent(id: number) {
    this.studentsService.removeStudent(id).subscribe(() => {
      this.getStudents()
    })
  }
}
