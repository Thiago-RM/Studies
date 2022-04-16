import { Product } from './../product.model';
import { Router } from '@angular/router';
import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    name: '',
    price: null
  }

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
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Operação executada com sucesso! ');
      this.routerLink.navigate(['/products']);
    });
  }

  cancelProduct(): void {
    this.routerLink.navigate(['/products']);
  }

}
