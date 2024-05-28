import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PersonasService } from '../personas.service';
import { Personas } from '../../models/personas.model';

@Component({
  selector: 'app-personas-create',
  templateUrl: './personas-create.component.html',
  styleUrls: ['./personas-create.component.css']
})
export class PersonasCreateComponent {
  persona: Personas = { id: 0, nombresCompletos: '', edad: 0 };

  constructor(
    private personaService: PersonasService,
    private router: Router
  ) { }

  createPersona(): void {
    this.personaService.createPersona(this.persona).subscribe(() => {
      this.router.navigate(['/personas']);
    });
  }
}
