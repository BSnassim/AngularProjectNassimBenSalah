import { Component, OnInit } from '@angular/core';
import { Materiel } from 'src/app/models/materiel';
import { MaterielService } from 'src/app/services/materiel.service';

@Component({
  selector: 'nas-detailmateriel',
  templateUrl: './detailmateriel.component.html',
  styleUrls: ['./detailmateriel.component.css']
})
export class DetailmaterielComponent implements OnInit {
  afficher:boolean=false;
  materiel:Materiel[];
  onClick(){
    this.afficher= !this.afficher;
  }
  constructor(private materielService:MaterielService) { }

  ngOnInit(): void {
    this.materiel = this.materielService.getMaterielsById("1");
  }

}
