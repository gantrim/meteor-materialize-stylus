# NOTE: Changed stylus package
As of v1.2.0 this package has switched to using the [coagmano:stylus package](https://github.com/coagmano/meteor-stylus/) instead of the bundled [meteor stylus package](https://atmospherejs.com/meteor/stylus). This is because the meteor stylus package is being deprecated after 2.513.14. This package may continue to work with the bundled meteor stylus package, but I cannot gurantee anything. If you want to keep using the bundled meteor stylus package, please pin the package at v1.1.8 using `meteor add gantrim:materialize-stylus@=1.1.8` or by doing `api.use('gantrim:materialize-stylus@1.1.8');` inside your package.js
# ABOUT
Materialize CSS Packaged for meteor and using stylus. This packages allows you to use all variables available in the SCSS materialize package with the clean syntax of stylus.
# INSTALL
Please make sure to remove the base meteor materialize package. This package has everything you need.
```
$ meteor add stylus
$ meteor add gantrim:materialize-stylus
```

# STYLUS
After you have added this package, create a main .styl file and add the following
```
@import '{gantrim:materialize-stylus}/lib/styl/components/_mixins.import'
@import '{gantrim:materialize-stylus}/lib/styl/components/_color.import'
@import '{gantrim:materialize-stylus}/lib/styl/components/_variables.import'
// add your own variables/overrides here
@import '{gantrim:materialize-stylus}/lib/styl/materialize-components'

```

# CONTRIBUTING
Bug fixes and pull requests welcome. At the very least, if you notice an issue please open an issue on github.

# CREDIT/THANKS
[Materialize](https://github.com/Dogfalo/materialize)

[meteor-materialize-scss](https://github.com/poetic/meteor-materialize-scss)

[Sass2Stylus](https://github.com/mojotech/sass2stylus)