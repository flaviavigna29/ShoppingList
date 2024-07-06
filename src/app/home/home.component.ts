import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  template: `
    <div class="hero min-h-96 mt-20 md:mt-44">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-3xl md:text-5xl font-bold mb-3">Shopping List</h1>
          <p class="py-4 md:text-lg">
            Questo progetto è un sito web per la gestione delle liste della
            spesa, progettato per offrire un'interfaccia intuitiva e moderna.
            Utilizza Angular per la struttura dell'applicazione, Tailwind CSS
            per lo stile e Daisy UI per i componenti, garantendo un'esperienza
            utente fluida e reattiva.
          </p>
          <button class="btn btn-primary">Scopri di più</button>
        </div>
      </div>
    </div>
  `,
  styles: ``,
})
export class HomeComponent {}
