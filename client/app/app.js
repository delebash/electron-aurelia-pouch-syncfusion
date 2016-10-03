import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
        { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
        { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title: 'Github Users' },
        { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title: 'Child Router' },
        { route: 'syncbutton',  name: 'syncbutton', moduleId: 'syncfusion/syncbutton', nav: true, title: 'syncbutton' },
        { route: 'pouchdb',  name: 'pouchdb', moduleId: 'pouchdb/pouchdb', nav: true, title: 'pouchdb' }

    ]);

    this.router = router;
  }
}
