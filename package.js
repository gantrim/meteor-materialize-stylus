// package metadata file for Meteor.js

Package.describe({
    name: 'gantrim:materialize-stylus',  // http://atmospherejs.com/materialize/materialize
    summary: 'Materialize (official): A modern responsive front-end framework based on Material Design',
    version: '0.0.1',
    git: 'https://github.com/poetic/meteor-materialize-scss'
});

Package.onUse(function (api) {
    api.versionsFrom('METEOR@1.2.1');

    api.use('stylus');
    api.use('jquery', 'client');
    api.imply('jquery', 'client');

    var assets = [
        'lib/font/material-design-icons/Material-Design-Icons.eot',
        'lib/font/material-design-icons/Material-Design-Icons.svg',
        'lib/font/material-design-icons/Material-Design-Icons.ttf',
        'lib/font/material-design-icons/Material-Design-Icons.woff',
        'lib/font/material-design-icons/Material-Design-Icons.woff2',
        'lib/font/roboto/Roboto-Bold.ttf',
        'lib/font/roboto/Roboto-Bold.woff',
        'lib/font/roboto/Roboto-Bold.woff2',
        'lib/font/roboto/Roboto-Light.ttf',
        'lib/font/roboto/Roboto-Light.woff',
        'lib/font/roboto/Roboto-Light.woff2',
        'lib/font/roboto/Roboto-Medium.ttf',
        'lib/font/roboto/Roboto-Medium.woff',
        'lib/font/roboto/Roboto-Medium.woff2',
        'lib/font/roboto/Roboto-Regular.ttf',
        'lib/font/roboto/Roboto-Regular.woff',
        'lib/font/roboto/Roboto-Regular.woff2',
        'lib/font/roboto/Roboto-Thin.ttf',
        'lib/font/roboto/Roboto-Thin.woff',
        'lib/font/roboto/Roboto-Thin.woff2',
    ];

    addAssets(api, assets);

    api.addFiles([
        'lib/js/bin/materialize.js',
    ], 'client');

    var stylFiles = [
        'lib/styl/components/date_picker/_default.date.import.styl',
        'lib/styl/components/date_picker/_default.import.styl',
        'lib/styl/components/date_picker/_default.time.import.styl',
        'lib/styl/components/_buttons.import.styl',
        'lib/styl/components/_cards.import.styl',
        'lib/styl/components/_carousel.import.styl',
        'lib/styl/components/_chips.import.styl',
        'lib/styl/components/_collapsible.import.styl',
        'lib/styl/components/_color.import.styl',
        'lib/styl/components/_dropdown.import.styl',
        'lib/styl/components/_form.import.styl',
        'lib/styl/components/_global.import.styl',
        'lib/styl/components/_grid.import.styl',
        'lib/styl/components/_icons-material-design.import.styl',
        'lib/styl/components/_materialbox.import.styl',
        'lib/styl/components/_mixins.import.styl',
        'lib/styl/components/_modal.import.styl',
        'lib/styl/components/_navbar.import.styl',
        'lib/styl/components/_normalize.import.styl',
        'lib/styl/components/_prefixer.import.styl',
        'lib/styl/components/_preloader.import.styl',
        'lib/styl/components/_roboto.import.styl',
        'lib/styl/components/_sideNav.import.styl',
        'lib/styl/components/_slider.import.styl',
        'lib/styl/components/_table_of_contents.import.styl',
        'lib/styl/components/_tabs.import.styl',
        'lib/styl/components/_toast.import.styl',
        'lib/styl/components/_tooltip.import.styl',
        'lib/styl/components/_typography.import.styl',
        'lib/styl/components/_variables.import.styl',
        'lib/styl/components/_waves.import.styl',
        'lib/styl/materialize.styl',
    ];

    api.addFiles(stylFiles, 'client');

    api.export('Materialize', 'client');
});


function addAssets(api, assets){
    if(api.addAssets){
        api.addAssets(assets, 'client');
    } else {
        api.addFiles(assets, 'client', {isAsset: true});
    }
}
