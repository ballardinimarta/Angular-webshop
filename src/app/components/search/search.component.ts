import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product/product.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() searchres = new EventEmitter<Product[]>();
  searchResult: Observable<Product[]>;
  searchTerm = new Subject<string>();

  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.searchResult = this.searchTerm.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((data) => this.service.searchProducts(data))
    );
  }

  search(term: string) {
    this.searchTerm.next(term);
  }

}
