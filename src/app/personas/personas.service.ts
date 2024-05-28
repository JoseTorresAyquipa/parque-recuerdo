import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personas } from '../models/personas.model';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {
  private apiUrl = 'https://localhost:44314/api/Personas';
  constructor(private http: HttpClient) { }

  getPersonas(): Observable<Personas[]> {
    return this.http.get<Personas[]>(this.apiUrl);
  }

  getPersona(id: number): Observable<Personas> {
    return this.http.get<Personas>(`${this.apiUrl}/${id}`);
  }

  createPersona(persona: Personas): Observable<Personas> {
    return this.http.post<Personas>(this.apiUrl, persona);
  }

  updatePersona(id: number, persona: Personas): Observable<Personas> {
    return this.http.put<Personas>(`${this.apiUrl}/${id}`, persona);
  }

  deletePersona(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
