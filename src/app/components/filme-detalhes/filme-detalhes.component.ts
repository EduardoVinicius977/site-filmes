import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FilmesService } from '../../services/filmes.service';
import { CommonModule } from '@angular/common';
import { FormatDatePipe } from '../../pipes/format-date.pipe';
import { NotaPipe } from '../../pipes/nota.pipe';
import { DestaqueDirective } from '../../directives/destaque.directive';
import { AvaliacaoColorDirective } from '../../directives/avaliacao-cor.directive';

@Component({
  selector: 'app-filme-detalhes',
  standalone: true,
  imports: [
    CommonModule,
    FormatDatePipe,
    NotaPipe,
    DestaqueDirective,
    AvaliacaoColorDirective,
  ],
  templateUrl: './filme-detalhes.component.html',
  styleUrls: ['./filme-detalhes.component.css'],
})
export class FilmeDetalhesComponent implements OnInit {
  filme: any;

  constructor(
    private filmesService: FilmesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const filmeId = +this.route.snapshot.paramMap.get('id')!;
    this.filmesService.getFilmeDetalhes(filmeId).subscribe((data) => {
      this.filme = data;
      console.log(this.filme.vote_average);
    });
  }

  voltar(): void {
    this.router.navigate(['/filmes']);
  }
}
