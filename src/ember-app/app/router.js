import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-otel2-авторизация-l');
  this.route('i-i-s-otel2-авторизация-e',
  { path: 'i-i-s-otel2-авторизация-e/:id' });
  this.route('i-i-s-otel2-авторизация-e.new',
  { path: 'i-i-s-otel2-авторизация-e/new' });
  this.route('i-i-s-otel2-гости-l');
  this.route('i-i-s-otel2-гости-e',
  { path: 'i-i-s-otel2-гости-e/:id' });
  this.route('i-i-s-otel2-гости-e.new',
  { path: 'i-i-s-otel2-гости-e/new' });
  this.route('i-i-s-otel2-допуск-l');
  this.route('i-i-s-otel2-допуск-e',
  { path: 'i-i-s-otel2-допуск-e/:id' });
  this.route('i-i-s-otel2-допуск-e.new',
  { path: 'i-i-s-otel2-допуск-e/new' });
  this.route('i-i-s-otel2-комнаты-l');
  this.route('i-i-s-otel2-комнаты-e',
  { path: 'i-i-s-otel2-комнаты-e/:id' });
  this.route('i-i-s-otel2-комнаты-e.new',
  { path: 'i-i-s-otel2-комнаты-e/new' });
  this.route('i-i-s-otel2-отели-l');
  this.route('i-i-s-otel2-отели-e',
  { path: 'i-i-s-otel2-отели-e/:id' });
  this.route('i-i-s-otel2-отели-e.new',
  { path: 'i-i-s-otel2-отели-e/new' });
});

export default Router;
