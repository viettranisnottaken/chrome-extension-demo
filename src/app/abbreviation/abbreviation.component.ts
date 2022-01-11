import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ABBREVIATIONS } from './constants/abbreviations';

@Component({
  selector: 'app-abbreviation',
  templateUrl: './abbreviation.component.html',
  styleUrls: ['./abbreviation.component.scss'],
})
export class AbbreviationComponent implements OnInit {
  abbreviationsControl = new FormControl('brb gtg');
  translatedAbbreviations: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.setTranslatedAbbreviations(this.abbreviationsControl.value);

    console.log(
      'Object.keys(ABBREVIATIONS).length',
      Object.keys(ABBREVIATIONS).length
    );

    this.abbreviationsControl.valueChanges.subscribe((value: string) => {
      this.setTranslatedAbbreviations(value);
    });
  }

  private setTranslatedAbbreviations(value: string) {
    const abbreviationKeys = value
      .trim()
      .split(' ')
      .map((abbr: string) => abbr.toUpperCase());

    this.translatedAbbreviations = abbreviationKeys.map((abbr: string) => {
      if (ABBREVIATIONS[abbr]) {
        return ABBREVIATIONS[abbr];
      }
    });
  }
}
