import { Component, OnInit } from '@angular/core';
import { PokemonsService } from '../../services/pokemons.service';
import { Cards } from 'src/app/models/pokemon.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pokemons',
  templateUrl: './pokemons.component.html',
  styleUrls: ['./pokemons.component.css']
})
export class PokemonsComponent implements OnInit {

  cards: Cards[] = [];
  error: any;

  constructor(
    public pokemonsService: PokemonsService,
    public ParamsRouter: ActivatedRoute
    ) {}

    ngOnInit() {
      this.getter();
    }

    public getter() {
      // debugger;
      this.pokemonsService.getCards().subscribe((data) => {
        this.cards = data.cards;
      }, error => {
        this.error = error;
      });
  }
}
