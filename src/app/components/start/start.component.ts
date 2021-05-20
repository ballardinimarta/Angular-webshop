import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product/product.service';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss']
})
export class StartComponent implements OnInit {
  movies: Product[] = [];
  shuffled: Product[] = [];
  selectedMovies: Product[] = [];
  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.service.products$.subscribe((data:Product[]) => {
      this.movies = data;
      this.shuffled = this.movies.sort(() => 0.5 - Math.random());
      this.selectedMovies = this.shuffled.slice(0, 3);
      console.log(this.selectedMovies);
    });
    this.service.getProducts();
    
  }
  getRandomMovies() {
    
  }
  
  

}
