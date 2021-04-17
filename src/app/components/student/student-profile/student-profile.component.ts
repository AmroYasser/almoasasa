import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from 'src/services/students.service';

@Component({
  selector: 'app-student-profile',
  templateUrl: './student-profile.component.html',
  styleUrls: ['./student-profile.component.css']
})
export class StudentProfileComponent implements OnInit {
  memberships: any
  student_id: number

  constructor(private _apiStudentService: StudentsService, private _router: Router, route: ActivatedRoute) {
    this.student_id = route.snapshot.params.id
  }

  ngOnInit(): void {
    this._apiStudentService.getStudentMembership(this.student_id).subscribe((data) => {
      this.memberships = data
    }, (err) => console.log(err))
  }

}
