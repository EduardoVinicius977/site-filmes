import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilmesService {
  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = 'f69a3e50d4a7f85b2671ea509c9146bb';

  constructor(private http: HttpClient) {}


  getFilmes(pagina: number, filmesPorPagina: number): Observable<any> {
    return this.http.get<any>(
      `${this.apiUrl}/movie/popular?api_key=${this.apiKey}&page=${pagina}&language=pt-BR`
    );
  }

  getFilmeDetalhes(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/movie/${id}?api_key=${this.apiKey}&language=pt-BR`);
  }

  getUltimosLancamentos() {
    return this.http.get<any>(
      `${this.apiUrl}/movie/now_playing?api_key=${this.apiKey}&language=pt-BR`
    );
  }
}
