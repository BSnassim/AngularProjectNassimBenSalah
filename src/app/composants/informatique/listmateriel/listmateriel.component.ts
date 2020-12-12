import { Component, OnInit } from '@angular/core';
import { Materiel } from 'src/app/models/materiel';
import { MaterielService } from 'src/app/services/materiel.service';

@Component({
  selector: 'nas-listmateriel',
  templateUrl: './listmateriel.component.html',
  styleUrls: ['./listmateriel.component.css']
})
export class ListmaterielComponent implements OnInit {
  materiels:Materiel[];
  constructor(private materielService:MaterielService) { }

  ngOnInit(): void {
    this.materiels = this.materielService.getMateriels();
  }

}
