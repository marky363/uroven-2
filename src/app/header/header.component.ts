import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromApp from '../store/app.reducer';
import * as GalleryActions from '../store/gallery.actions';

import { Category } from '../shared/category.model';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass'],

})
export class HeaderComponent implements OnInit {
  selectedCategory: Category;

  bgUrl: string = '../assets/pexels-photo-261187.jpeg';

  constructor(private store: Store<fromApp.AppState>, private router: Router) {}

  ngOnInit(): void {
    this.store
      .select('galleryList')

      .subscribe((state) => {
        var item = state.categories.find(
          (data) => data.id == state.openedCategory
        );

        this.selectedCategory = item;
        this.bgUrl = state.bgURL;
      });
  }

  backToCategories() {
    this.router.navigate(['']);
    this.store.dispatch(new GalleryActions.OpenGallery(0));
  }
}
