import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TareaService } from '../../services/tarea.service';
import { Tarea } from '../../interfaces/tarea';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-detalle-tarea',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './detalle-tarea.component.html'
})
export class DetalleTareaComponent {
  tarea: Tarea | null = null;

  constructor(
    private route: ActivatedRoute,
    private tareaService: TareaService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.tareaService.getTarea(id).subscribe(t => this.tarea = t);
    }
  }
}
