import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  propLegal = "qualquer";

  constructor(
    private productService: ProductService,
    private routerLink: Router
  ) { }

  ngOnInit(): void {
  }

  fazerAlgo(): void {
    console.log('Fazendo algo');
  }

  createProduct(): void {
    this.productService.showMessage('Operação executada com sucesso! ');
  }

  cancelProduct(): void {
    this.routerLink.navigate(['/products']);
  }

}
