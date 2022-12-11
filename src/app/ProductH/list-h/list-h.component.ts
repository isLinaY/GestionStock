import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Homme } from 'src/app/Model/homme.model';
import { HommeService } from 'src/app/service/homme.service';

@Component({
  selector: 'app-list',
  templateUrl: './list-h.component.html',
  styleUrls: ['./list-h.component.css']
})
export class List_hComponent implements OnInit {

  produitH!: Homme[];
  produit: Homme = new Homme();
  constructor(private hommeService: HommeService,
    private router: Router) { }

  ngOnInit(): void {
    this.getProduitH();
  }

  private getProduitH(){
    this.hommeService.getProduitHList().subscribe(data => {
      this.produitH = data;
    });
  }
  saveProduit(){
    this.hommeService.createProduitH(this.produit).subscribe( data =>{
      console.log(data);
      this.getProduitH();

    },
    error => console.log(error));
  }
  onSubmit(){
    console.log(this.produit);
    this.saveProduit();
    this.getProduitH()
  }


  ProduitHDetails(id: number){
    this.router.navigate(['employee-details', id]);
  }

  updateProduitH(id: number){
    this.router.navigate(['updateH', id]);
  }

  deleteProduitH(id: number){
    this.hommeService.deleteProduitH(id).subscribe( data => {
     console.log(data);
       this.getProduitH();
     })
  }

}
