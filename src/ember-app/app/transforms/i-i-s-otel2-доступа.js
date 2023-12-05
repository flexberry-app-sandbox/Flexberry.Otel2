import FlexberryEnum from 'ember-flexberry-data/transforms/flexberry-enum';
import ДоступаEnum from '../enums/i-i-s-otel2-доступа';

export default FlexberryEnum.extend({
  enum: ДоступаEnum,
  sourceType: 'IIS.Otel2.Доступа'
});
