import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private selectedFilme: any;

  setFilme(filme: any): void {
    this.selectedFilme = filme;
  }

  getFilme(): any {
    return this.selectedFilme;
  }
}
