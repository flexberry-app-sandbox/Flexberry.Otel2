import {
  defineNamespace,
  defineProjections,
  Model as АвторизацияMixin
} from '../mixins/regenerated/models/i-i-s-otel2-авторизация';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(АвторизацияMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
