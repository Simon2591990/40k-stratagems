import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

export class Stratagem {
  constructor(
    public name: string,
    public text: string,
    public cost: string,
    public phase: string,
    public source: string
  ){
  }
}
export class Faction {
  constructor(
    public id: string,
    public name: string,
    public stratagems: Stratagem[]
  ){

  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']


})
export class AppComponent implements OnInit {
  title = 'stratagem-frontend';
  factions: Faction[] = [];
  selectedFaction!: Faction;

  constructor(
    private httpClient: HttpClient
  ){};

  ngOnInit(): void {
    this.getFactions();
  }

  getFactions(){
    this.httpClient.get<any>('https://strat-api.herokuapp.com/api').subscribe(
      response => {
        console.log(response)
        this.factions = response;
      }
    )
  }

  selectFaction(faction: Faction) {
    this.selectedFaction = new Faction(faction.id, faction.name, faction.stratagems)
    console.log(this.selectedFaction.name)
  }
}
