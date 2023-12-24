import { RenderPosition, render } from './render';
import NewTripFilterView from './View/Trip-filter/trip-filter';
import NewTripInfoView from './View/Trip-info/trip-info';
import EventPresenter from './Presenter/event-presenter';

const siteTripControlsFilterElement = document.querySelector('.trip-controls__filters');
const siteTripMainElement = document.querySelector('.trip-main');
const siteTripEventsElement = document.querySelector('.trip-events');

const eventPresenter = new EventPresenter({
  container: siteTripEventsElement
});

render(new NewTripInfoView(), siteTripMainElement, RenderPosition.AFTERBEGIN);
render(new NewTripFilterView(), siteTripControlsFilterElement);

eventPresenter.init();
