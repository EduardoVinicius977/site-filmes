import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { FilmesListComponent } from './components/filmes-list/filmes-list.component';
import { FilmeDetalhesComponent } from './components/filme-detalhes/filme-detalhes.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'filmes', component: FilmesListComponent },
  { path: 'filme/:id', component: FilmeDetalhesComponent },
];
