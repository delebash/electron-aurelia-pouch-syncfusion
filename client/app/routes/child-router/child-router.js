export class ChildRouter {
  heading = 'Child Router';

  configureRouter(config, router) {
    config.map([
      {route: ['', '../welcome'], moduleId: '../welcome/welcome', nav: true, title: 'Welcome'},
      {route: '../flickr', moduleId: '../flickr/flickr', nav: true, title: 'Flickr'},
      {route: '../child-router', moduleId: '../child-router/child-router', nav: true, title: 'Child Router'}
    ]);

    this.router = router;
  }
}
