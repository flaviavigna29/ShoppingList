import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
private theme: string= 'valentine';

getTheme() {
  return this.theme;
}

setTheme(theme: string) {
  this.theme = theme;
  document.documentElement.setAttribute('data-theme', theme);
}
}
