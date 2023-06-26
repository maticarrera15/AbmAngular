import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EstudiantesService } from '../../estudiantes.service';

@Component({
  selector: 'app-nuevo-estudiante',
  templateUrl: './nuevo-estudiante.component.html',
  styleUrls: ['./nuevo-estudiante.component.css'],
})
export class NuevoEstudianteComponent implements OnInit {
  constructor(private estudiante: EstudiantesService) {}
  addStudent = new FormGroup({
    name: new FormControl(''),
    apellido: new FormControl(''),
    mail: new FormControl(''),
    legajo: new FormControl(''),
  });
  message: boolean = false;
  ngOnInit(): void {}
  SaveData() {
    //console.log(this.addStudent.value);
    this.estudiante
      .saveStudentData(this.addStudent.value)
      .subscribe((result) => {
        this.message = true;
        this.addStudent.reset({});
      });
  }
  removeMessage() {
    this.message = false;
  }
}
