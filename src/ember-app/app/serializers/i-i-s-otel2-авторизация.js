import { Serializer as АвторизацияSerializer } from
  '../mixins/regenerated/serializers/i-i-s-otel2-авторизация';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(АвторизацияSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
