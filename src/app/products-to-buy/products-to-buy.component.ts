import { HttpClient } from '@angular/common/http';
import { Component, signal, inject, OnInit, computed } from '@angular/core';
import { Product } from '../model/product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products-to-buy',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="w-full md:w-2/5 mx-auto my-4">
      <label class="input input-bordered flex items-center gap-2">
        <input
          type="text"
          (keydown.enter)="onAddProduct($event)"
          class="grow"
          placeholder="Aggiungi Prodotto"
        />
        <kbd class="kbd kbd-sm">Invio</kbd>
      </label>
    </div>

    <!-- contatore prodotti -->
    <div class="w-full md:w-2/5 mx-auto my-5">
      <div class="flex justify-between">
        <button class="btn lg:btn-wide">Completati
          <div class="badge badge-accent">{{completedProducts()}}</div>
        </button>
        <button class="btn lg:btn-wide">Da comprare
          <div class="badge">{{todoProducts()}}</div>
        </button>
      </div>
    </div>

    <!-- lista prodotti -->
    <div class="w-full md:w-2/5 mx-auto border border-neutral rounded-lg">
      @for (product of products(); track product.id) {
      <div class="flex justify-between">
        <!-- pulsante e nome -->
        <div class="flex items-center">
          <button
            class="btn btn-square btn-ghost text-error"
            (click)="onDelete(product)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="size-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </button>
          <span
            class="label-text"
            [ngClass]="{ 'line-through text-accent': product.completed }"
            >{{ product.name }}</span
          >
        </div>
        <label class="label cursor-pointer mr-4">
          <input
            type="checkbox"
            [checked]="product.completed"
            class="checkbox"
            (click)="onCompleted(product)"
          />
        </label>
      </div>
      }
    </div>
  `,
  styles: ``,
})
export class ProductsToBuyComponent implements OnInit {
  http = inject(HttpClient);

  url: string = 'http://localhost:3000/products';

  products = signal<Product[]>([]);

  completedProducts = computed(
    () => this.products().filter((product) => product.completed).length
  );
  todoProducts = computed(
    () => this.products().filter((product) => !product.completed).length
  );

  onAddProduct(event: any) {
    // console.log(event.target.value);
    let nameProduct: string = event.target.value;

    let newProduct: Product = {
      name: nameProduct,
      completed: false,
    };

    this.http.post<Product>(this.url, newProduct).subscribe((res) => {
      // console.log(res);
      this.products.update((prev) => [...prev, res]);
    });

    event.target.value = '';
  }

  onCompleted(item: Product) {
    let updatedProduct = { ...item, completed: !item.completed };

    this.http
      .patch<Product>(`${this.url}/${item.id}`, updatedProduct)
      .subscribe((res) => {
        this.products.update((prev) => {
          return prev.map((p) => (p.id === item.id ? res : p));
        });
      });
  }

  onDelete(item: Product) {
    this.http.delete<Product>(`${this.url}/${item.id}`).subscribe((res) => {
      this.products.update((prev) =>
        prev.filter((product) => product.id !== res.id)
      );
    });
  }

  ngOnInit(): void {
    this.http.get<Product[]>(this.url).subscribe((res) => {
      // console.log(res);
      this.products.set(res);
    });
  }
}
