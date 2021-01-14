import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Category } from 'src/app/shared/category.model';
import * as fromApp from '../../store/app.reducer';
import * as GalleryActions from '../../store/gallery.actions';


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.sass'],
})
export class GalleryComponent implements OnInit {
  @Input('Category') category: Category;
  constructor(private store: Store<fromApp.AppState>) {}

  bgImg() {
    if (this.category.gallery) {
      return this.category.gallery[0].picurl;
    } else {
      return this.category.img;
    }
  }

  ngOnInit(): void {
    this.store.dispatch(new GalleryActions.ChangeBg(this.bgImg()));
  }

  openedModal: boolean = false;
  action = "addPhotos" 
  openModalAddPhotos(){
    this.openedModal = !this.openedModal
  }

  openedGallery: boolean = false;
  gallery = "gallery"
  indexInGallery: number = 0;
  openGallery(index){
    this.indexInGallery = index
    this.openedGallery = !this.openedGallery
  }

}
