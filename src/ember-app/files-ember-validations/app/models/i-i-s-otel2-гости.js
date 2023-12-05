import {
  defineNamespace,
  defineProjections,
  Model as ГостиMixin
} from '../mixins/regenerated/models/i-i-s-otel2-гости';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ГостиMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
