import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmesListComponent } from './filmes-list.component';

describe('FilmesListComponent', () => {
  let component: FilmesListComponent;
  let fixture: ComponentFixture<FilmesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilmesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
