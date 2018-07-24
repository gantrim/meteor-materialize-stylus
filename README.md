# BREAKING CHANGES: 
### New Materialize version
As of version 2.0.0 of this package used v1.0.0 of materialize. There were signifigant changes between 0.9.* and 1.0 so more than likely, you will need to fix some things in your project after you upgrade. If you dont want to upgrade, just use the older version of this package with `meteor add gantrim:materialize-stylus@=1.2.0` or `api.use('gantrim:materialize-stylus@1.2.0');` Please also see the [version 1 documentation](https://github.com/gantrim/meteor-materialize-stylus/blob/release/v1.2.1-Materialize-0.100.2/README.md)

### New Meteor Stylus Package
As of v1.2.0 this package has switched to using the [coagmano:stylus package](https://github.com/coagmano/meteor-stylus/) instead of the bundled [meteor stylus package](https://atmospherejs.com/meteor/stylus). This is because the meteor stylus package is being deprecated after 2.513.14. This package may continue to work with the bundled meteor stylus package, but I cannot gurantee anything. If you want to keep using the bundled meteor stylus package, please pin the package at v1.1.8 using `meteor add gantrim:materialize-stylus@=1.1.8` or by doing `api.use('gantrim:materialize-stylus@1.1.8');` inside your package.js

# ABOUT
Materialize v1.0.0-rc.2 Packaged for meteor and using stylus. This packages allows you to use all variables available in the SCSS materialize package with the clean syntax of stylus.
# INSTALL
Please make sure to remove the base meteor materialize package. This package has everything you need.
```
$ meteor add coagmano:stylus
$ meteor add gantrim:materialize-stylus
```

# STYLUS
After you have added this package, create a main `.styl` file and add the following
```
/ Color
@require "{gantrim:materialize-stylus}/lib/styl/components/color-variables.import";
@require "{gantrim:materialize-stylus}/lib/styl/components/color-classes.import";

// Variables;
@require "{gantrim:materialize-stylus}/lib/styl/components/variables.import";

// a file that contains your customized materialize variables.
@require 'PATH_TO_YOUR variables.import.styl'

// Materialize components
@require "{gantrim:materialize-stylus}/lib/styl/materialize.styl";

```
You can view all available variables [here](https://github.com/gantrim/meteor-materialize-stylus/blob/feature/1.00-rc-2/lib/styl/components/variables.import.styl)

# CONTRIBUTING
Bug fixes and pull requests welcome. At the very least, if you notice an issue please open an issue on github.

# CREDIT/THANKS
[Materialize](https://github.com/Dogfalo/materialize)

[meteor-materialize-scss](https://github.com/poetic/meteor-materialize-scss)

[Sass2Stylus](https://github.com/mojotech/sass2stylus)
