import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

import IISOtel2АвторизацияLForm from './forms/i-i-s-otel2-авторизация-l';
import IISOtel2ГостиLForm from './forms/i-i-s-otel2-гости-l';
import IISOtel2ДопускLForm from './forms/i-i-s-otel2-допуск-l';
import IISOtel2КомнатыLForm from './forms/i-i-s-otel2-комнаты-l';
import IISOtel2ОтелиLForm from './forms/i-i-s-otel2-отели-l';
import IISOtel2АвторизацияEForm from './forms/i-i-s-otel2-авторизация-e';
import IISOtel2ГостиEForm from './forms/i-i-s-otel2-гости-e';
import IISOtel2ДопускEForm from './forms/i-i-s-otel2-допуск-e';
import IISOtel2КомнатыEForm from './forms/i-i-s-otel2-комнаты-e';
import IISOtel2ОтелиEForm from './forms/i-i-s-otel2-отели-e';
import IISOtel2АвторизацияModel from './models/i-i-s-otel2-авторизация';
import IISOtel2ГостиModel from './models/i-i-s-otel2-гости';
import IISOtel2ДопускModel from './models/i-i-s-otel2-допуск';
import IISOtel2КомнатыModel from './models/i-i-s-otel2-комнаты';
import IISOtel2ОтелиModel from './models/i-i-s-otel2-отели';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-otel2-авторизация': IISOtel2АвторизацияModel,
    'i-i-s-otel2-гости': IISOtel2ГостиModel,
    'i-i-s-otel2-допуск': IISOtel2ДопускModel,
    'i-i-s-otel2-комнаты': IISOtel2КомнатыModel,
    'i-i-s-otel2-отели': IISOtel2ОтелиModel
  },

  'application-name': 'Otel2',

  forms: {
    loading: {
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Otel2',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Otel2',
          title: 'Otel2'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
          title: ''
        },
        otel2: {
          caption: 'Otel2',
          title: 'Otel2',
          'i-i-s-otel2-авторизация-l': {
            caption: 'Авторизация',
            title: ''
          },
          'i-i-s-otel2-гости-l': {
            caption: 'Гости',
            title: ''
          },
          'i-i-s-otel2-допуск-l': {
            caption: 'Допуск',
            title: ''
          },
          'i-i-s-otel2-отели-l': {
            caption: 'Отели',
            title: ''
          },
          'i-i-s-otel2-комнаты-l': {
            caption: 'Комнаты',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
    },
    'i-i-s-otel2-авторизация-l': IISOtel2АвторизацияLForm,
    'i-i-s-otel2-гости-l': IISOtel2ГостиLForm,
    'i-i-s-otel2-допуск-l': IISOtel2ДопускLForm,
    'i-i-s-otel2-комнаты-l': IISOtel2КомнатыLForm,
    'i-i-s-otel2-отели-l': IISOtel2ОтелиLForm,
    'i-i-s-otel2-авторизация-e': IISOtel2АвторизацияEForm,
    'i-i-s-otel2-гости-e': IISOtel2ГостиEForm,
    'i-i-s-otel2-допуск-e': IISOtel2ДопускEForm,
    'i-i-s-otel2-комнаты-e': IISOtel2КомнатыEForm,
    'i-i-s-otel2-отели-e': IISOtel2ОтелиEForm
  },

});

export default translations;
