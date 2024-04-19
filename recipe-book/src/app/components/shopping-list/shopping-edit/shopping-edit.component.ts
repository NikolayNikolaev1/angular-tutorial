import { Component, ElementRef, ViewChild } from '@angular/core';
import { ShoppingListService } from '../../../services/shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrl: './shopping-edit.component.css',
})
export class ShoppingEditComponent {
  @ViewChild('nameInput') inputNameRef: ElementRef<HTMLInputElement>;
  @ViewChild('amountInput') amountInput: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {}

  onAddClick() {
    const name = this.inputNameRef.nativeElement.value;
    const amount = Number(this.amountInput.nativeElement.value);

    if (name.length === 0 || amount === 0) return;

    this.shoppingListService.addIngredient({ name, amount });
  }

  onClearClick() {
    this.inputNameRef.nativeElement.value = '';
    this.amountInput.nativeElement.value = '';
  }
}
