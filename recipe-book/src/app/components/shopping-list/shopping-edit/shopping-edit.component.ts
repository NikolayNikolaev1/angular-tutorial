import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import Ingredient from '../../../models/ingredient';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent {
  @Output() addIngredient = new EventEmitter<Ingredient>();

  @ViewChild('nameInput') inputNameRef: ElementRef<HTMLInputElement>;
  @ViewChild('amountInput') amountInput: ElementRef;

  onAddClick() {
    this.addIngredient.emit({ name: this.inputNameRef.nativeElement.value, amount: Number(this.amountInput.nativeElement.value) });
  }
}
