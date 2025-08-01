import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarea } from '../interfaces/tarea';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TareaService {
  private dbUrl = 'https://evaluacion2-581db-default-rtdb.firebaseio.com/';

  constructor(private http: HttpClient) {}

  getTareas(): Observable<Tarea[]> {
    return this.http.get<{[key:string]: Tarea}>(`${this.dbUrl}.json`).pipe(
      map(obj => obj ? Object.entries(obj).map(([id, tarea]) => ({ id, ...tarea })) : [])
    );
  }

  getTarea(id: string): Observable<Tarea> {
    return this.http.get<Tarea>(`${this.dbUrl}/${id}.json`).pipe(
      map(tarea => ({ id, ...tarea }))
    );
  }

  addTarea(tarea: Tarea) {
    return this.http.post<{name: string}>(`${this.dbUrl}.json`, tarea);
  }

  updateTarea(id: string, tarea: Tarea) {
    return this.http.put(`${this.dbUrl}/${id}.json`, tarea);
  }

  deleteTarea(id: string) {
    return this.http.delete(`${this.dbUrl}/${id}.json`);
  }
}
