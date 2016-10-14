import 'bootstrap';
import 'bootstrap/css/bootstrap.css!';

export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
        { route: ['', 'routes/welcome'], name: 'welcome', moduleId: 'routes/welcome/welcome',      nav: true, title: 'Welcome' },
        { route: 'routes/github-users', name: 'githubusers', moduleId: 'routes/github-users/github-users', nav: true, title: 'Github Users' },
        { route: 'routes/child-router',  name: 'child-router', moduleId: 'routes/child-router/child-router', nav: true, title: 'Child Router' },
        { route: 'routes/syncbutton',  name: 'syncbutton', moduleId: 'routes/syncfusion/sync-button', nav: true, title: 'syncbutton' },
        { route: 'routes/pouchdb',  name: 'pouchdb', moduleId: 'routes/pouchdb/pouchdb', nav: true, title: 'pouchdb' }

    ]);

    this.router = router;
  }
}
