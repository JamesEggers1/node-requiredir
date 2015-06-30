Change Log
==============
## 2015-06-30 ##
* npm package version updated to 1.0.7
* Updated package devDependencies
* Added License to package.json.
* Updated Travis-ci to test v0.6-v0.12
* Updated copyright date in README.

## 2012-07-12 ##
* npm package version updated to 1.0.6
* Merged in changes from Joshua Poehls [jpoehls] concerning pathing issues.
* Added contributors section to README.

## 2012-07-10 ##
* npm package version updated to 1.0.5
* Added compatibility code to address path.exists -> fs.exists updates for Node 0.8.

## 2012-07-03 ##
* npm package version updated to 1.0.4
* Fixed the closure in requiredir.js that somehow got messed up. Private members no longer leak.

## 2012-07-02 ##
* npm package version updated to 1.0.3
* Modified package config to use `keywords` instead of `tags`

## 2012-06-30 ##
* npm package version updated to 1.0.2
* Modified import logic to exclude hidden files from being imported. Files names starting with a '.' will no longer be imported.