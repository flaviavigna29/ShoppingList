import { Component } from '@angular/core';
import { HomeComponent } from '../../home/home.component';
import { CommonModule } from '@angular/common';
import { ProductsToBuyComponent } from '../../products-to-buy/products-to-buy.component';
import { ThemeService } from '../../theme.service';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule, HomeComponent, ProductsToBuyComponent],
  template: `
    <div class="w-full py-5">
      <div class="flex justify-center">
        <button
          class="btn sm:btn-sm md:btn-md lg:btn-lg mx-2"
          [ngClass]="{ 'btn-neutral': tab == 1 }"
          (click)="tab = 1"
        >
          Home
        </button>
        <button
          class="btn sm:btn-sm md:btn-md lg:btn-lg mx-2"
          [ngClass]="{ 'btn-neutral': tab == 2 }"
          (click)="tab = 2"
        >
          Lista Acquisti
        </button>
      </div>
      <div class="">
        <div class="dropdown">
          <label tabindex="0" class="btn m-1">
            <i class="fas fa-paint-brush"
              ><svg
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
                  d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.59l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z"
                />
              </svg>
            </i>
          </label>
          <ul
            tabindex="0"
            class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li *ngFor="let theme of themes">
              <a (click)="changeTheme(theme)">{{ theme }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <div class="contents">
      @if (tab === 1) {
      <div class="px-6">
        <app-home />
      </div>
      } @else {
      <div class="py-10 px-6">
        <app-products-to-buy />
      </div>
      }
    </div>
  `,
  styles: ``,
})
export class TabsComponent {
  [x: string]: any;
  tab: number = 1;

  themes: string[] = [
    'light',
    'dark',
    'cupcake',
    'valentine',
    'garden',
    'forest',
    'aqua',
    'lofi',
    'fantasy',
    'wireframe',
    'black',
    'luxury',
    'business',
    'lemonade',
    'night',
    'coffee',
    'dim',
    'nord',
    'sunset',
  ];

  constructor(private themeService: ThemeService) {}

  changeTheme(theme: string) {
    this.themeService.setTheme(theme);
  }
}
