import { Component, OnInit } from '@angular/core';
import { Product, products } from '../products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
  product?: Product;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const productIdFromRoute = Number(routeParams.get('productId'));

    this.product = products.find(
      (product) => product.id === productIdFromRoute
    );
  }

  addToCart() {
    if (typeof this.product !== 'undefined') {
      this.cartService.addToCart(this.product);
      window.alert('Your product has been added to the cart!');
    }
  }
}
