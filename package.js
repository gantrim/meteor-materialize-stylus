// package metadata file for Meteor.js

Package.describe({
    name: 'gantrim:materialize-stylus',
    summary: 'Materialize v1.0.0-rc.2 converted to stylus and packaged for meteor',
    version: '2.0.1',
    git: 'https://github.com/gantrim/meteor-materialize-stylus'
});

Package.onUse(function (api) {
    api.versionsFrom('METEOR@1.8.1');

    api.use('coagmano:stylus@1.0.3');
    api.use('jquery', 'client');
    api.imply('jquery', 'client');


    api.addFiles([
        'lib/js/bin/materialize.js',
    ], 'client');

    const stylFiles = [
        'lib/styl/components/badges.import.styl',
        'lib/styl/components/buttons.import.styl',
        'lib/styl/components/cards.import.styl',
        'lib/styl/components/carousel.import.styl',
        'lib/styl/components/chips.import.styl',
        'lib/styl/components/collapsible.import.styl',
        'lib/styl/components/color-classes.import.styl',
        'lib/styl/components/color-variables.import.styl',
        'lib/styl/components/datepicker.import.styl',
        'lib/styl/components/dropdown.import.styl',
        'lib/styl/components/global.import.styl',
        'lib/styl/components/grid.import.styl',
        'lib/styl/components/icons-material-design.import.styl',
        'lib/styl/components/materialbox.import.styl',
        'lib/styl/components/modal.import.styl',
        'lib/styl/components/navbar.import.styl',
        'lib/styl/components/normalize.import.styl',
        'lib/styl/components/preloader.import.styl',
        'lib/styl/components/pulse.import.styl',
        'lib/styl/components/sidenav.import.styl',
        'lib/styl/components/slider.import.styl',
        'lib/styl/components/table_of_contents.import.styl',
        'lib/styl/components/tabs.import.styl',
        'lib/styl/components/tapTarget.import.styl',
        'lib/styl/components/timepicker.import.styl',
        'lib/styl/components/toast.import.styl',
        'lib/styl/components/tooltip.import.styl',
        'lib/styl/components/transitions.import.styl',
        'lib/styl/components/typography.import.styl',
        'lib/styl/components/variables.import.styl',
        'lib/styl/components/waves.import.styl',
        'lib/styl/components/forms/checkboxes.import.styl',
        'lib/styl/components/forms/file-input.import.styl',
        'lib/styl/components/forms/forms.import.styl',
        'lib/styl/components/forms/input-fields.import.styl',
        'lib/styl/components/forms/radio-buttons.import.styl',
        'lib/styl/components/forms/range.import.styl',
        'lib/styl/components/forms/select.import.styl',
        'lib/styl/components/forms/switches.import.styl',
        'lib/styl/materialize.styl'
    ];

    api.addFiles(stylFiles, 'client', {isImport: true});

    api.export('M', 'client');
});


function addAssets(api, assets) {
    if (api.addAssets) {
        api.addAssets(assets, 'client');
    }
    else {
        api.addFiles(assets, 'client', {isAsset: true});
    }
}
