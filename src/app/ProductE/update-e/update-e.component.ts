import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Enfant } from 'src/app/Model/enfant.model';
import { EnfantService } from 'src/app/service/enfant.service';

@Component({
  selector: 'app-update-e',
  templateUrl: './update-e.component.html',
  styleUrls: ['./update-e.component.css']
})
export class UpdateEComponent implements OnInit {
  id!: number;
  produit: Enfant = new Enfant();
  constructor(private enfantService: EnfantService,
    private router: Router ,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.enfantService.getProduitEById(this.id).subscribe(data => {
      this.produit = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.enfantService.updateProduitE(this.id, this.produit).subscribe( data =>{
      this.goToProductList();
    }
    , error => console.log(error));
  }

  goToProductList(){
    this.router.navigate(['/ProduitE']);
  }

}
