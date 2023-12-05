import {
  defineNamespace,
  defineProjections,
  Model as ДопускMixin
} from '../mixins/regenerated/models/i-i-s-otel2-допуск';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ДопускMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
