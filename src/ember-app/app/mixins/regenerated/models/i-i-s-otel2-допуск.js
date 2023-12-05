import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  допуск: DS.attr('i-i-s-otel2-доступа'),
  гости: DS.belongsTo('i-i-s-otel2-гости', { inverse: null, async: false }),
  комнаты: DS.belongsTo('i-i-s-otel2-комнаты', { inverse: null, async: false })
});

export let ValidationRules = {
  допуск: {
    descriptionKey: 'models.i-i-s-otel2-допуск.validations.допуск.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  гости: {
    descriptionKey: 'models.i-i-s-otel2-допуск.validations.гости.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  комнаты: {
    descriptionKey: 'models.i-i-s-otel2-допуск.validations.комнаты.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ДопускE', 'i-i-s-otel2-допуск', {
    допуск: attr('Допуск', { index: 9 })
  });

  modelClass.defineProjection('ДопускL', 'i-i-s-otel2-допуск', {
    комнаты: belongsTo('i-i-s-otel2-комнаты', 'Наименование', {
      отели: belongsTo('i-i-s-otel2-отели', '', {
        наименование: attr('Наименование', { index: 0 })
      }, { index: -1, hidden: true }),
      комнатаОтеля: attr('КомнатаОтеля', { index: 3 })
    }, { index: -1, hidden: true }),
    гости: belongsTo('i-i-s-otel2-гости', 'Имя', {
      авторизация: belongsTo('i-i-s-otel2-авторизация', '', {
        имя: attr('Имя', { index: 1 }),
        фамилия: attr('Фамилия', { index: 2 })
      }, { index: -1, hidden: true }),
      комната: attr('Комната', { index: 4 })
    }, { index: -1, hidden: true }),
    допуск: attr('Допуск', { index: 5 })
  });
};
