import { Component } from '@angular/core';
import { WishItem } from '../shared/models/wishItem';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Wishlist';
  items: WishItem[] = [
    new WishItem('Trip to Vegas', true),
    new WishItem('New Car', true),
    new WishItem('New House', false),
  ];
  newWishtext: string = '';
  listFilter: string = '0';
  visibleItem: WishItem[] = this.items;

  //add wish to items array
  addNewWish() {
    let newItem = new WishItem(this.newWishtext);
    this.items.push(newItem);
    this.newWishtext = '';
  }

  toggleItem(item: WishItem) {
    item.isComplete = !item.isComplete;
  }

  filterChanged(filter: string) {
    this.listFilter = filter;
    if (this.listFilter == '0') {
      this.visibleItem = this.items;
    } else if (this.listFilter == '1') {
      this.visibleItem = this.items.filter((item) => item.isComplete == true);
    } else if (this.listFilter == '2') {
      this.visibleItem = this.items.filter((item) => item.isComplete == false);
    }
  }
}
