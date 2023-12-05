import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iD: DS.attr('number'),
  комнатаОтеля: DS.attr('number'),
  этаж: DS.attr('number'),
  отели: DS.belongsTo('i-i-s-otel2-отели', { inverse: null, async: false })
});

export let ValidationRules = {
  iD: {
    descriptionKey: 'models.i-i-s-otel2-комнаты.validations.iD.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  комнатаОтеля: {
    descriptionKey: 'models.i-i-s-otel2-комнаты.validations.комнатаОтеля.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  этаж: {
    descriptionKey: 'models.i-i-s-otel2-комнаты.validations.этаж.__caption__',
    validators: [
      validator('ds-error'),
      validator('number', { allowString: true, allowBlank: true, integer: true }),
    ],
  },
  отели: {
    descriptionKey: 'models.i-i-s-otel2-комнаты.validations.отели.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('КомнатыE', 'i-i-s-otel2-комнаты', {
    iD: attr('ID', { index: 1 }),
    комнатаОтеля: attr('Комната отеля', { index: 2 }),
    этаж: attr('Этаж', { index: 3 }),
    отели: belongsTo('i-i-s-otel2-отели', 'Отели', {
      наименование: attr('Наименование', { index: 4, hidden: true })
    }, { index: 0, displayMemberPath: 'наименование' })
  });

  modelClass.defineProjection('КомнатыL', 'i-i-s-otel2-комнаты', {
    отели: belongsTo('i-i-s-otel2-отели', 'Наименование', {
      наименование: attr('Наименование', { index: 0 })
    }, { index: -1, hidden: true }),
    iD: attr('ID', { index: 1 }),
    комнатаОтеля: attr('Комната отеля', { index: 2 }),
    этаж: attr('Этаж', { index: 3 })
  });
};
