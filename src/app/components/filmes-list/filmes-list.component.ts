import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FilmesService } from '../../services/filmes.service';
import { FormatDatePipe } from '../../pipes/format-date.pipe';
import { FiltroPipe } from '../../pipes/filtro.pipe';
import { FormsModule } from '@angular/forms';
import { NotaPipe } from '../../pipes/nota.pipe';

@Component({
  selector: 'app-filmes-list',
  standalone: true,
  imports: [CommonModule, FormatDatePipe, FiltroPipe,FormsModule,NotaPipe],
  templateUrl: './filmes-list.component.html',
  styleUrls: ['./filmes-list.component.css']
})
export class FilmesListComponent implements OnInit {
  filmes: any[] = [];
  termoBusca: string = '';


  paginaAtual: number = 1;
  filmesPorPagina: number = 10;
  totalFilmes: number = 0;

  constructor(private filmesService: FilmesService, private router: Router) {}

  ngOnInit() {
    this.carregarFilmes();
  }


  carregarFilmes() {
    this.filmesService.getFilmes(this.paginaAtual, this.filmesPorPagina).subscribe((data) => {
      this.filmes = data.results;
      this.totalFilmes = data.total_results;
    });
  }


  proximaPagina() {
    if (this.paginaAtual * this.filmesPorPagina < this.totalFilmes) {
      this.paginaAtual++;
      this.carregarFilmes();
    }
  }


  paginaAnterior() {
    if (this.paginaAtual > 1) {
      this.paginaAtual--;
      this.carregarFilmes();
    }
  }


  verDetalhes(id: number) {
    this.router.navigate(['/filme', id]);
  }
}
