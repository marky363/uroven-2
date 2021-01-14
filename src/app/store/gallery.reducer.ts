import * as GalleryActions from "./gallery.actions"
import { Category, Picture} from "../shared/category.model"


export interface State {
  categories: Category[];
  openedCategory: number,

  bgURL: string,

}

const initalState: State = {
   categories: [
      new Category("príroda", "../assets/landscape-meadow-field-mountains-66874.jpeg", 1),
      new Category("ARCHITEKTÚRA", "../assets/pexels-photo-261187.jpeg", 2, [
        new Picture("../assets/pexels-photo-24464.jpg"),
        new Picture("../assets/pexels-photo-186077.jpeg"),
        new Picture("../assets/pexels-photo-221506.jpeg"),
        new Picture("../assets/pexels-photo-261146.jpeg"),
        new Picture("../assets/pexels-photo-261187.jpeg"),
        new Picture("../assets/pexels-photo-323780.jpeg"),
      ]),
      new Category("ĽUDIA", "../assets/pexels-photo-27411.jpg",3),
      new Category("JEDLO", "../assets/food-salad-healthy-lunch.jpg",4),
      new Category("AUTÁ", "../assets/pexels-photo-210019.jpeg",5),
      
   ],
   openedCategory: 0,
   bgURL: "../assets/pexels-photo-261187.jpeg"

};
export function GalleryReducer(
  state: State = initalState,
  action: GalleryActions.CategoryActions
) {
  switch (action.type) {
   
    case GalleryActions.OPEN_GALLERY:

      return {
        ...state,
        openedCategory: action.payload
      }

    case GalleryActions.CHANGE_BG:

    return {
      ...state,
      bgURL: action.payload
    }

   
    
    default:
      return state;
  }
}
