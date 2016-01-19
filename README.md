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