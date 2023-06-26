import { Component, OnInit } from '@angular/core';
import { EstudiantesService } from '../../estudiantes.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-listar-estudiante',
  templateUrl: './listar-estudiante.component.html',
  styleUrls: ['./listar-estudiante.component.css'],
})
export class ListarEstudianteComponent implements OnInit {
  constructor(private student: EstudiantesService) {}
  studentData: any = [];
  dtOptions: DataTables.Settings = {};
  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 5,
      lengthMenu: [5, 10, 15, 50],
      processing: true,
    };
    this.student.getAllStudents().subscribe((data) => {
      //console.log(data);
      this.studentData = data;
    });
  }
  deleteStudent(idStudent: any) {
    this.student.deleteStudents(idStudent).subscribe((result) => {
      this.ngOnInit();
    });
  }
}
