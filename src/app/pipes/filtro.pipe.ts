import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {
  transform(filmes: any[], termo: string): any[] {
    if (!filmes || !termo) {
      return filmes;
    }
    return filmes.filter(filme => filme.title.toLowerCase().includes(termo.toLowerCase()));
  }
}
