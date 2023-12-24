import TripSortView from '../View/Trip-sort/trip-sort';
import EditList from '../View/Trip-events-list/trip-events-list';
import TripEventItemView from '../View/Trip-events-item/trip-events-item';
import RefactorFormList from '../View/Refactor-form/refactor-form-list';
import { render } from '../render';

export default class EventPresenter {
  sortComponent = new TripSortView();
  editListComponent = new EditList();

  constructor({container}) {
    this.container = container;
  }

  init(){
    render(this.sortComponent, this.container);
    render(this. editListComponent, this.container);
    render(new RefactorFormList, this.editListComponent.getElement());

    for(let i = 0; i < 3; i++){
      render(new TripEventItemView, this.editListComponent.getElement());
    }
  }
}

