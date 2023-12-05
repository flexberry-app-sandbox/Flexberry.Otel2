import { Serializer as ДопускSerializer } from
  '../mixins/regenerated/serializers/i-i-s-otel2-допуск';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(ДопускSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
