import { Component, OnInit } from '@angular/core';
import { RestService } from '../../services/rest.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Planet } from '../../models/planet.model';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  protected unsubscribeSearch: Subject<void> = new Subject<void>();
  public planets: Planet[];
  public planetSearch: any;
  public errorMessage: string;
  public searchedPlanets: any[];
  public allPlanets: boolean =  false;
  constructor(private restService: RestService, private router: Router,
    private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    this.spinnerService.show();
    this.restService.getData('planets/').subscribe((data: any) => {
      this.spinnerService.hide();
      this.planets = data.results;
    }, (err) => {
      this.spinnerService.hide();
      this.errorMessage = 'Sorry for the incovenience, We are not able to fetch the Planets.'
    });
  }

  // This can be used when data is big and on every key press we have to get the data from database(By sending payload).
  // searchPlanets(event) {
  //   console.log(event)
  //   this.unsubscribeSearch.next();
  //   this.restService.getData('planets/').pipe(takeUntil(this.unsubscribeSearch)).subscribe((data: any) => {
  //     this.planets = data.results;
  //     console.log(this.planets)
  //   }, (err) => {
  //   });
  // }

  // Search planets based on keyword
  searchPlanets(keyword) {
    this.allPlanets = false;
    if(keyword !== '') {
      let searchedPlanet = [];
      this.planets.forEach((planet) => {
        if (this.checkForSearch(planet, keyword)) {
          searchedPlanet.push(planet)
        }
      });
      this.searchedPlanets = searchedPlanet;
    } else {
      this.searchedPlanets = [];
    }
  }

  // Check if Search input keyword exists in data
  checkForSearch(planet, keyword) {
    for (let key in planet) {
      if (JSON.stringify(planet[key]).toLocaleLowerCase().includes(keyword.toLocaleLowerCase())) {
        return true;
      }
    }
  }

  // Will remove session login information from session storage and redirects to Login Screen.
  logout() {
    sessionStorage.removeItem('login');
    this.router.navigate(['login']);
  }

}
