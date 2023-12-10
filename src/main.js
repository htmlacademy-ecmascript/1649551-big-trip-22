import { RenderPosition, render } from './render';

import NewTripInfoView from './View/Trip-info/trip-info';
import NewTripFilterView from './View/Trip-filter/trip-filter';
import TripSortView from './View/Trip-sort/trip-sort';
import RefactorFormList from './View/Refactor-form/refactor-form-list';

const siteTripMainElement = document.querySelector('.trip-main');
const siteTripControlsFilterElement = document.querySelector('.trip-controls__filters');
const siteTripEventsElement = document.querySelector('.trip-events');

render(new NewTripInfoView(), siteTripMainElement, RenderPosition.AFTERBEGIN);
render(new NewTripFilterView(), siteTripControlsFilterElement);
render(new TripSortView(), siteTripEventsElement);
render(new RefactorFormList(), siteTripEventsElement);
