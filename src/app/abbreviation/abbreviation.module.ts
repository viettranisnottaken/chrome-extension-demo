import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AbbreviationComponent } from './abbreviation.component';

@NgModule({
  declarations: [AbbreviationComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  exports: [AbbreviationComponent],
})
export class AbbreviationModule {}
