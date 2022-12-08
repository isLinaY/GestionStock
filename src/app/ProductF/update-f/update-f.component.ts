import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Femme } from 'src/app/Model/femme.model';
import { FemmeService } from 'src/app/service/femme.service';

@Component({
  selector: 'app-update-f',
  templateUrl: './update-f.component.html',
  styleUrls: ['./update-f.component.css']
})
export class UpdateFComponent implements OnInit {
  id!: number;
  produit: Femme = new Femme();
  constructor(private femmeService: FemmeService,
    private router: Router ,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.femmeService.getProduitFById(this.id).subscribe(data => {
      this.produit = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.femmeService.updateProduitF(this.id, this.produit).subscribe( data =>{
      this.goToProductList();
    }
    , error => console.log(error));
  }

  goToProductList(){
    this.router.navigate(['/ProduitF']);
  }

}
