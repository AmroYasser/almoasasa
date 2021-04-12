import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICourse } from 'src/models/interfaces/icourse';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private _http: HttpClient) { }

  getAllCourses(): Observable<ICourse[]> {
    return this._http.get<ICourse[]>('http://127.0.0.1:8000/course-group/')
  }
}
