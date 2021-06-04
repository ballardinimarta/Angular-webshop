import { Component,  OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductCategory } from 'src/app/models/ProductCategory';
import { CategoryService } from 'src/app/services/category/category.service';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-show-products',
  templateUrl: './show-products.component.html',
  styleUrls: ['./show-products.component.scss']
})
export class ShowProductsComponent implements OnInit {
  categorys: ProductCategory[] = [];
  products: Product[] = [];
  status: boolean = false;


  constructor(private productService: ProductService , private categoryService: CategoryService) { }

  ngOnInit(): void {
    // get products
    this.productService.products$.subscribe((data:Product[]) => {
      this.products = data;
    })
    this.productService.getProducts();
    // get categorys
    this.categoryService.categorys$.subscribe((data:ProductCategory[]) => {
      this.categorys = data;
    })
    this.categoryService.getCategorys();
    
  }
  categorySearch(p: Product[], mycategory: ProductCategory): Product[] {
    let categoryresult: Product[] = [];
    p.map((product, i) => {
      product.productCategory.map((category, i) => {
        if (category.categoryId === mycategory.id) {
          categoryresult.push(product);
        };
      })
    })
    
    return categoryresult;
  }

  getProductByCategory(mycategory: ProductCategory) {
    this.productService.getProducts();
    this.products = this.categorySearch(this.products, mycategory);
    console.log(this.products);
  }

  getAllProducts(){
    this.productService.getProducts();
  }
}
