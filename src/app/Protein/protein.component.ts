// @ts-ignore
import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
// @ts-ignore
import {HttpClient} from '@angular/common/http';
import {Title} from "@angular/platform-browser";

// @ts-ignore
// @ts-ignore
@Component({
  selector: 'app-protein',
  templateUrl: './protein.component.html',
  styleUrls: ['./protein.component.css']
})
export class ProteinComponent implements OnInit{
  @ViewChild('whey') private wheyBox;     // get the checkbox elements
  @ViewChild('plant') private plantBox;
  @ViewChild('bar') private barBox;

  choiceList = [];              // holds user choices
  foodList = [];                // holds returned values from EDAMAM API

  EDAMAMID: string;
  EDAMAMKey: string;

  constructor(private _http: HttpClient, private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('Protein');
  }

  getProteinInfo() {

    this.EDAMAMID = '3dbb91ea';
    this.EDAMAMKey = 'a79d8c55e22615e2639fe70be9f9cc76';

    this.choiceList = []; // clear choices list
    this.foodList = []; // clear results list

    // get current checkbox values and add to choices list
    this.wheyBox = (document.getElementById('Whey Protein Powder') as HTMLInputElement);
    if (this.wheyBox.checked) {
      this.choiceList.push('Whey Protein Powder');
    } else { this.choiceList.push(''); }
    this.plantBox = (document.getElementById('Plant-based Protein Powder') as HTMLInputElement);
    if (this.plantBox.checked) {
      this.choiceList.push('Plant-Based Protein Powder');
    } else { this.choiceList.push(''); }
    this.barBox = (document.getElementById('Protein Bars') as HTMLInputElement);
    if (this.barBox.checked) {
      this.choiceList.push('Protein Bars');
    } else { this.choiceList.push(''); }

    console.log(this.choiceList);
    // setup EDAMAM API call, 10 results using user choice as ingredient search
    if (this.choiceList !== null) {
      this._http.get('https://api.edamam.com/search?q=' + this.choiceList[0] + '%20' + this.choiceList[1] + '%20' +
        this.choiceList[2] + '&app_id=' + this.EDAMAMID + '&app_key=' + this.EDAMAMKey + '&from=0&to=10')
        .subscribe((data: any) => {
          console.log(data);
          this.foodList = Object.keys(data.hits).map(function(k) {        // references hits in API response
            const r = data.hits[k].recipe;
            return {name: r.label, url: r.url, ingredients: r.ingredients, nutrients: r.totalNutrients};
          });                                                              // assign needed data to properties
          console.log('Food retrieved.');
          console.log(this.foodList);
        });
    }
  }}
