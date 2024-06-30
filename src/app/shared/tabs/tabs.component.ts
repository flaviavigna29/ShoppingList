import { Component } from '@angular/core';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [],
  template: `
    <div class="w-full">
      <div class="flex justify-center">
        <button class="btn sm:btn-sm md:btn-md lg:btn-lg">Home</button>
        <button class="btn sm:btn-sm md:btn-md lg:btn-lg">
          Product To Buy
        </button>
      </div>
    </div>

    <div class="contents">
      <div class="py-10 px-6">TAB 1</div>
      <div class="py-10 px-6">TAB 2</div>
    </div>
  `,
  styles: ``,
})
export class TabsComponent {}
