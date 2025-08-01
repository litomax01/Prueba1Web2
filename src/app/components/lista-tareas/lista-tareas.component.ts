import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TareaService } from '../../services/tarea.service';
import { Tarea } from '../../interfaces/tarea';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './lista-tareas.component.html'
})
export class ListaTareasComponent {
  tareas: Tarea[] = [];

  constructor(private tareaService: TareaService) {}

  ngOnInit() {
    this.tareaService.getTareas().subscribe(tareas => {
      this.tareas = tareas;
    });
  }

  eliminarTarea(id: string) {
    this.tareaService.deleteTarea(id).subscribe(() => {
      this.tareas = this.tareas.filter(t => t.id !== id);
    });
  }
}
