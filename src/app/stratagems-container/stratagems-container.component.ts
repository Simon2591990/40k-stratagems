import { Component, Input, OnInit } from '@angular/core';
import { Faction, Stratagem } from '../app.component';

@Component({
  selector: 'app-stratagems-container',
  templateUrl: './stratagems-container.component.html',
  styleUrls: ['./stratagems-container.component.scss']
})
export class StratagemsContainerComponent implements OnInit {
  @Input()
  faction!: Faction;
  phases = ["command","movement", "psychic", "shooting", "fight", "any", "pre_game"];

  constructor() { }

  ngOnInit(): void {
    
  }

}
