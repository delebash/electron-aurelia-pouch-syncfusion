export function configure(aurelia) {

    aurelia.use
        .standardConfiguration()
        .developmentLogging()
        .plugin('aurelia-syncfusion-bridge', plugin => plugin.useAll());

    aurelia.start().then(a => a.setRoot());
};