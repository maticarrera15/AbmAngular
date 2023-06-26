import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EstudiantesService } from '../../estudiantes.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actualizar-estudiante',
  templateUrl: './actualizar-estudiante.component.html',
  styleUrls: ['./actualizar-estudiante.component.css'],
})
export class ActualizarEstudianteComponent {
  constructor(
    private estudiante: EstudiantesService,
    private router: ActivatedRoute
  ) {}
  editStudent = new FormGroup({
    name: new FormControl(''),
    apellido: new FormControl(''),
    mail: new FormControl(''),
    legajo: new FormControl(''),
  });
  message: boolean = false;
  ngOnInit(): void {
    //console.log(this.router.snapshot.params?.['id']);
    this.estudiante
      .getStudentById(this.router.snapshot.params?.['id'])
      .subscribe((result: any) => {
        console.log(result);
        this.editStudent = new FormGroup({
          name: new FormControl(result['name']),
          apellido: new FormControl(result['apellido']),
          mail: new FormControl(result['mail']),
          legajo: new FormControl(result['legajo']),
        });
      });
  }
  UpdateData() {
    //console.log(this.addStudent.value);
    this.estudiante
      .updateStudentData(
        this.router.snapshot.params?.['id'],
        this.editStudent.value
      )
      .subscribe((result) => {
        //console.log(result);
        this.message = true;
        this.editStudent.reset({});
      });
  }
  removeMessage() {
    this.message = false;
  }
}
