import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-otel2-допуск', 'Unit | Model | i-i-s-otel2-допуск', {
  // Specify the other units that are required for this test.
  needs: [
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
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
