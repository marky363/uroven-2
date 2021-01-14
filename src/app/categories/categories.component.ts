import { Component, OnChanges, OnInit } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
} from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import { Category } from '../shared/category.model';
import * as fromApp from '../store/app.reducer';
import * as GalleryActions from '../store/gallery.actions';
@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.sass'],
})
export class CategoriesComponent implements OnInit {
  categories: Category[] = [];
  openedGallery: number;
  openedCategory: Category;

  sub: Subscription;

  constructor(
    private store: Store<fromApp.AppState>,
    private router: Router,
    private ActivatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.sub = this.store.select('galleryList').subscribe((state) => {
      this.categories = state.categories;
      this.openedGallery = state.openedCategory;
    });

    this.ActivatedRoute.params.subscribe((data) => {
      var categroy = this.categories.find(
        (category) => category.name == data.name
      );
      if (categroy) {
        this.openGallery(categroy, true);
      }
      this.sub.unsubscribe();
    });
  }

  openGallery(category: Category, navigated?: boolean) {
    this.openedCategory = category;
    if (!navigated) {
      this.router.navigate(['/gallery/' + category.name]);
    }

    this.store.dispatch(new GalleryActions.OpenGallery(category.id));
  }

  changeBg(imgUrl){
    this.store.dispatch(new GalleryActions.ChangeBg(imgUrl));
  }

  openedModal: boolean = false;
  action = "addCategory"
  openModalAddCategory(){
    this.openedModal = !this.openedModal
  }
}
