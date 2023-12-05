import { Serializer as КомнатыSerializer } from
  '../mixins/regenerated/serializers/i-i-s-otel2-комнаты';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(КомнатыSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
