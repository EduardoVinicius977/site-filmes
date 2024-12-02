import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FilmesService } from '../../services/filmes.service';
import { FormatDatePipe } from '../../pipes/format-date.pipe';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormatDatePipe],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  ultimosLancamentos: any[] = [];

  constructor(private filmesService: FilmesService, private router: Router) {}

  ngOnInit(): void {
    this.filmesService.getUltimosLancamentos().subscribe((data) => {
      this.ultimosLancamentos = data.results;


      this.ultimosLancamentos.sort((a, b) => {
        return new Date(b.release_date).getTime() - new Date(a.release_date).getTime();
      });
    });
  }

  verDetalhes(id: number): void {
    this.router.navigate(['/filme', id]);
  }
}
