// package metadata file for Meteor.js

Package.describe({
    name: 'gantrim:materialize-stylus',  // http://atmospherejs.com/materialize/materialize
    summary: 'Materialize (official): A modern responsive front-end framework based on Material Design',
    version: '0.0.1',
    git: 'https://github.com/poetic/meteor-materialize-scss'
});

Package.onUse(function (api) {
    api.versionsFrom('METEOR@1.0');

    api.use('fourseven:scss@3.3.3');
    api.use('jquery', 'client');
    api.imply('jquery', 'client');

    var assets = [
        'dist/font/material-design-icons/Material-Design-Icons.eot',
        'dist/font/material-design-icons/Material-Design-Icons.svg',
        'dist/font/material-design-icons/Material-Design-Icons.ttf',
        'dist/font/material-design-icons/Material-Design-Icons.woff',
        'dist/font/material-design-icons/Material-Design-Icons.woff2',
        'material-design-icons/iconfont/MaterialIcons-Regular.eot',
        'material-design-icons/iconfont/MaterialIcons-Regular.ttf',
        'material-design-icons/iconfont/MaterialIcons-Regular.woff',
        'material-design-icons/iconfont/MaterialIcons-Regular.woff2',
        'dist/font/roboto/Roboto-Bold.ttf',
        'dist/font/roboto/Roboto-Bold.woff',
        'dist/font/roboto/Roboto-Bold.woff2',
        'dist/font/roboto/Roboto-Light.ttf',
        'dist/font/roboto/Roboto-Light.woff',
        'dist/font/roboto/Roboto-Light.woff2',
        'dist/font/roboto/Roboto-Medium.ttf',
        'dist/font/roboto/Roboto-Medium.woff',
        'dist/font/roboto/Roboto-Medium.woff2',
        'dist/font/roboto/Roboto-Regular.ttf',
        'dist/font/roboto/Roboto-Regular.woff',
        'dist/font/roboto/Roboto-Regular.woff2',
        'dist/font/roboto/Roboto-Thin.ttf',
        'dist/font/roboto/Roboto-Thin.woff',
        'dist/font/roboto/Roboto-Thin.woff2',
    ];

    addAssets(api, assets);

    api.addFiles([
        'dist/js/materialize.js',
    ], 'client');

    var stylFiles = [
        'lib/styl/components/lib/styl/components/date_picker/_default.date.styl',
        'lib/styl/components/date_picker/_default.styl',
        'lib/styl/components/date_picker/_default.time.styl',
        'lib/styl/components/_buttons.styl',
        'lib/styl/components/_cards.styl',
        'lib/styl/components/_chips.styl',
        'lib/styl/components/_collapsible.styl',
        'lib/styl/components/_color.styl',
        'lib/styl/components/_dropdown.styl',
        'lib/styl/components/_form.styl',
        'lib/styl/components/_global.styl',
        'lib/styl/components/_grid.styl',
        'lib/styl/components/_icons-material-design.styl',
        'lib/styl/components/_materialbox.styl',
        'lib/styl/components/_material-icons.styl',
        'lib/styl/components/_mixins.styl',
        'lib/styl/components/_modal.styl',
        'lib/styl/components/_navbar.styl',
        'lib/styl/components/_normalize.styl',
        'lib/styl/components/_prefixer.styl',
        'lib/styl/components/_preloader.styl',
        'lib/styl/components/_roboto.styl',
        'lib/styl/components/_sideNav.styl',
        'lib/styl/components/_slider.styl',
        'lib/styl/components/_table_of_contents.styl',
        'lib/styl/components/_tabs.styl',
        'lib/styl/components/_toast.styl',
        'lib/styl/components/_tooltip.styl',
        'lib/styl/components/_typography.styl',
        'lib/styl/components/_variables.styl',
        'lib/styl/components/_waves.styl',
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
