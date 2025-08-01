import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TareaService } from '../../services/tarea.service';
import { Tarea } from '../../interfaces/tarea';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registro-tarea',
  standalone: true,
  imports: [FormsModule, CommonModule, RouterLink],
  templateUrl: './registro-tarea.component.html'
})
export class RegistroTareaComponent {
  tarea: Tarea = { titulo: '', descripcion: '', completada: false, fecha: '' };
  editMode = false;
  id: string | null = null;

  constructor(
    private tareaService: TareaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id');
    if (this.id) {
      this.editMode = true;
      this.tareaService.getTarea(this.id).subscribe(t => this.tarea = t);
    }
  }

  guardar() {
    if (this.editMode && this.id) {
      this.tareaService.updateTarea(this.id, this.tarea).subscribe(() => this.router.navigate(['/tareas']));
    } else {
      this.tareaService.addTarea(this.tarea).subscribe(() => this.router.navigate(['/tareas']));
    }
  }
}
