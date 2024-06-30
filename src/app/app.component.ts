import { Component } from '@angular/core';
import { TabsComponent } from './shared/tabs/tabs.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    TabsComponent
  ],
  template: `
<app-tabs></app-tabs>
  `,
  styles: [],
})
export class AppComponent {
  title = 'ProgettoShoppingListAngular';
}
