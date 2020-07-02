// @ts-ignore
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
// @ts-ignore
import {HttpClient} from '@angular/common/http';
import {Title} from "@angular/platform-browser";

// @ts-ignore
// @ts-ignore
@Component({
  selector: 'app-macros',
  templateUrl: './macros.component.html',
  styleUrls: ['./macros.component.css']
})
export class MacrosComponent implements OnInit{
  @ViewChild('recipe') userSearch: ElementRef;     // get the search box element
  userValue: any;

  macroList = [];                // holds returned values from USDA API

  USDAKey: string;

  constructor(private _http: HttpClient, private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('Macros');
  }

  getMacroInfo() {

    this.USDAKey = 'YpZ87MY3RksUN8jXJofcb2IFKp5rERkBasgaHE3H';
    this.userValue = this.userSearch.nativeElement.value;
    this.macroList = []; // clear results list

    // setup USDA API call based on users input as recipe
    if (this.userValue !== null || this.userValue !== '') {
      this._http.get('https://api.nal.usda.gov/fdc/v1/foods/search?api_key=' + this.USDAKey + '&query='
        + this.userValue)
        .subscribe((data: any) => {
          this.macroList = Object.keys(data.foods).map(function() {        // references first food in API response
            const m = data.foods[0];
            return {nutrients: m.foodNutrients};
          });                                                              // assign needed data to properties
          console.log('Macro nutrients retrieved.');
          console.log(this.macroList);
        });
    }
  }}
