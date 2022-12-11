import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Enfant } from 'src/app/Model/enfant.model';
import { EnfantService } from 'src/app/service/enfant.service';

@Component({
  selector: 'app-list',
  templateUrl: './list-e.component.html',
  styleUrls: ['./list-e.component.css']
})
export class List_eComponent implements OnInit {

  produitE!: Enfant[];
  produit: Enfant = new Enfant();
  constructor(private enfantService: EnfantService,
    private router: Router) { }

  ngOnInit(): void {
    this.getProduitE();
  }

  private getProduitE(){
    this.enfantService.getProduitEList().subscribe(data => {
      this.produitE = data;
    });
  }
  saveProduit(){
    this.enfantService.createProduitE(this.produit).subscribe( data =>{
      console.log(data);
      this.getProduitE();

    },
    error => console.log(error));
  }
  onSubmit(){
    console.log(this.produit);
    this.saveProduit();
    this.getProduitE()
  }


  ProduitEDetails(id: number){
    this.router.navigate(['employee-details', id]);
  }

  updateProduitE(id: number){
    this.router.navigate(['updateE', id]);
  }

  deleteProduitE(id: number){
    this.enfantService.deleteProduitE(id).subscribe( data => {
     console.log(data);
       this.getProduitE();
     })
  }

}
