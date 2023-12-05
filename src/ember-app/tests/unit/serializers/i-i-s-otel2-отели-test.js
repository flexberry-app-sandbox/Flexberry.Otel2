import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-otel2-отели', 'Unit | Serializer | i-i-s-otel2-отели', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-otel2-отели',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

    'transform:i-i-s-otel2-доступа',

    'model:i-i-s-otel2-авторизация',
    'model:i-i-s-otel2-гости',
    'model:i-i-s-otel2-допуск',
    'model:i-i-s-otel2-комнаты',
    'model:i-i-s-otel2-отели',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
