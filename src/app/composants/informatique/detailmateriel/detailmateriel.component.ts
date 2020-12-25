import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Materiel } from 'src/app/models/materiel';
import { MaterielService } from 'src/app/services/materiel.service';

@Component({
  selector: 'nas-detailmateriel',
  templateUrl: './detailmateriel.component.html',
  styleUrls: ['./detailmateriel.component.css']
})
export class DetailmaterielComponent implements OnInit {
  afficher:boolean=false;
  materiel: Materiel;
  ide:string;
  onClick(){
    this.afficher= !this.afficher;
  }
  constructor(private materielService:MaterielService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.ide = this.activatedRoute.snapshot.params['id'];
    this.materiel = this.materielService.getMaterielsById(this.ide);
  }

}
