import { Component } from '@angular/core';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import allProducts from '../products.json';

@Component({
  selector: 'bot-catalog',
  imports: [ProductDetailsComponent],
  //inline template (smaller components)
  /*template: `
    <ul>
      <li>
        <bot-product-details />
      </li>
    </ul>
  `,
  */
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.css',
})
export class CatalogComponent {
  products = allProducts;
}
