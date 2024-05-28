import { Component } from '@angular/core';
import { PersonasService } from '../personas.service';
import { Personas } from '../../models/personas.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-personas-list',
  templateUrl: './personas-list.component.html',
  styleUrls: ['./personas-list.component.css']
})
export class PersonasListComponent {
  personas: Personas[] = [];

  constructor(private personaService: PersonasService, private router: Router) { }

  ngOnInit(): void {
    this.loadPersonas();
  }

  loadPersonas(): void {
    this.personaService.getPersonas().subscribe(data => {
      this.personas = data;
    });
  }

  deletePersona(id: number): void {
    this.personaService.deletePersona(id).subscribe(() => {
      this.loadPersonas();
    });
  }

  editPersona(id: number): void {
    this.router.navigate([`/personas/edit/${id}`]);
  }

  createPersona(): void {
    this.router.navigate(['/personas/create']);
  }

}
