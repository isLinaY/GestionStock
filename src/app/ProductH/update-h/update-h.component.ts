import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Homme } from 'src/app/Model/homme.model';
import { HommeService } from 'src/app/service/homme.service';

@Component({
  selector: 'app-update-h',
  templateUrl: './update-h.component.html',
  styleUrls: ['./update-h.component.css']
})
export class UpdateHComponent implements OnInit {
  id!: number;
  produit: Homme = new Homme();
  constructor(private hommeService: HommeService,
    private router: Router ,  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    this.hommeService.getProduitHById(this.id).subscribe(data => {
      this.produit = data;
    }, error => console.log(error));
  }

  onSubmit(){
    this.hommeService.updateProduitH(this.id, this.produit).subscribe( data =>{
      this.goToProductList();
    }
    , error => console.log(error));
  }

  goToProductList(){
    this.router.navigate(['/ProduitH']);
  }

}
