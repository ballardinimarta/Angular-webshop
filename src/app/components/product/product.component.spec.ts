import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Component } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Product } from 'src/app/models/Product';
import { ProductService } from 'src/app/services/product/product.service';
import { MockProductService } from 'src/app/testing/mock-product.service';

import { ProductComponent } from './product.component';

describe('ProductComponent', () => {
  let component: TestParentComponent;
  let fixture: ComponentFixture<TestParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductComponent, TestParentComponent ],
      imports: [HttpClientTestingModule],
      providers: [{provide: ProductService, useClass: MockProductService}]

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should present correct product', () => {
    let h3: HTMLHeadingElement = fixture.nativeElement.querySelector('h3');
    expect(h3.innerHTML).toContain(component.oneProduct.name, component.oneProduct.year);
  })
 
});

@Component({
  template: `<app-product [product] = 'oneProduct' ></app-product>`
})
class TestParentComponent {
  oneProduct: Product =  { added: '2021',
  description: 'film2',
  id: 2,
  imageUrl: 'film2',
  name: 'film2',
  price:100,
  productCategory: [{  categoryId: 7,
    category: 'hej'}],
  year:2000,
  amount: 0
}
}
