import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.otel2.caption'),
          title: i18n.t('forms.application.sitemap.otel2.title'),
          children: [{
            link: 'i-i-s-otel2-авторизация-l',
            caption: i18n.t('forms.application.sitemap.otel2.i-i-s-otel2-авторизация-l.caption'),
            title: i18n.t('forms.application.sitemap.otel2.i-i-s-otel2-авторизация-l.title'),
            icon: 'paperclip',
            children: null
          }, {
            link: 'i-i-s-otel2-гости-l',
            caption: i18n.t('forms.application.sitemap.otel2.i-i-s-otel2-гости-l.caption'),
            title: i18n.t('forms.application.sitemap.otel2.i-i-s-otel2-гости-l.title'),
            icon: 'file',
            children: null
          }, {
            link: 'i-i-s-otel2-допуск-l',
            caption: i18n.t('forms.application.sitemap.otel2.i-i-s-otel2-допуск-l.caption'),
            title: i18n.t('forms.application.sitemap.otel2.i-i-s-otel2-допуск-l.title'),
            icon: 'calendar',
            children: null
          }, {
            link: 'i-i-s-otel2-отели-l',
            caption: i18n.t('forms.application.sitemap.otel2.i-i-s-otel2-отели-l.caption'),
            title: i18n.t('forms.application.sitemap.otel2.i-i-s-otel2-отели-l.title'),
            icon: 'folder',
            children: null
          }, {
            link: 'i-i-s-otel2-комнаты-l',
            caption: i18n.t('forms.application.sitemap.otel2.i-i-s-otel2-комнаты-l.caption'),
            title: i18n.t('forms.application.sitemap.otel2.i-i-s-otel2-комнаты-l.title'),
            icon: 'book',
            children: null
          }]
        }
      ]
    };
  }),
})