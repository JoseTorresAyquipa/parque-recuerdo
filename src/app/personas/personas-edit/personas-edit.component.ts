import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonasService } from '../personas.service';
import { Personas } from '../../models/personas.model';

@Component({
  selector: 'app-personas-edit',
  templateUrl: './personas-edit.component.html',
  styleUrls: ['./personas-edit.component.css']
})
export class PersonasEditComponent {
  persona: Personas = { id: 0, nombresCompletos: '', edad: 0 };

  constructor(
    private route: ActivatedRoute,
    private personaService: PersonasService,
    private router: Router
  ) { }

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.personaService.getPersona(id).subscribe(data => {
      this.persona = data;
    });
  }

  updatePersona(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.personaService.updatePersona(id, this.persona).subscribe(() => {
      this.router.navigate(['/personas']);
    });
  }
}
