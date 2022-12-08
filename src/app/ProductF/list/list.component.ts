import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Femme } from 'src/app/Model/femme.model';
import { FemmeService } from 'src/app/service/femme.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  produitF!: Femme[];
  produit: Femme = new Femme();
  constructor(private femmeService: FemmeService,
    private router: Router) { }

  ngOnInit(): void {
    this.getProduitF();
  }

  private getProduitF(){
    this.femmeService.getProduitFList().subscribe(data => {
      this.produitF = data;
    });
  }
  saveProduit(){
    this.femmeService.createProduitF(this.produit).subscribe( data =>{
      console.log(data);
      this.getProduitF();

    },
    error => console.log(error));
  }
  onSubmit(){
    console.log(this.produit);
    this.saveProduit();
    this.getProduitF()
  }


  ProduitFDetails(id: number){
    this.router.navigate(['employee-details', id]);
  }

  updateProduitF(id: number){
    this.router.navigate(['updateF', id]);
  }

  deleteProduitF(id: number){
    this.femmeService.deleteProduitF(id).subscribe( data => {
     console.log(data);
       this.getProduitF();
     })
  }

}
