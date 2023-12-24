import RefactorFormList from '../View/Refactor-form/refactor-form-list';
import RefactorFormItem from '../View/Refactor-form/refactor-form-item';
import { render } from '../render';

export default class EventsListPresenter{
  refactorFormList = new RefactorFormList();
  RefactorFormItem = new RefactorFormItem();

  constructor({refactorFormContainer}) {
    this.refactorFormContainer = refactorFormContainer;
  }

  init() {
    render(this.refactorFormList, this.refactorFormContainer);
    render()
  }
}
