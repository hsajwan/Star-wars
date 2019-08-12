import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Planet } from '../../models/planet.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  protected unsubscribeSearch: Subject<void> = new Subject<void>();
  public planets: Planet[];
  public planetSearch: any;
  constructor(private restService: RestService, private router: Router) { }

  ngOnInit() {
  }

  searchPlanets(event) {
    console.log(event)
    this.unsubscribeSearch.next();
    this.restService.getData('planets/').pipe(takeUntil(this.unsubscribeSearch)).subscribe((data: any) => {
      this.planets = data.results;
      console.log(this.planets)
    }, (err) => {
    });
  }

  logout() {
    this.router.navigate(['login']);
  }

}
