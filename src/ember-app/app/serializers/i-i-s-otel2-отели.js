import { Serializer as ОтелиSerializer } from
  '../mixins/regenerated/serializers/i-i-s-otel2-отели';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ОтелиSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
