import {
  defineNamespace,
  defineProjections,
  Model as КомнатыMixin
} from '../mixins/regenerated/models/i-i-s-otel2-комнаты';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(КомнатыMixin, {
});

defineNamespace(Model);
defineProjections(Model);

export default Model;
