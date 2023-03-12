#!/bin/bash

echo "\Following instructions from: https://github.com/felangel/mason/tree/master/packages/mason_cli\n"

echo "> Activate from https://pub.dev"
dart pub global activate mason_cli

echo "> Installing JavaScript/TypeScript Patterns"

templates=( "factory" )
 
for tmpl in "${templates[@]}"
do
    echo "> Installing js-pattern $tmpl"
    mason add js-pattern-$tmpl --git-url https://github.com/arnat-technologies/js-patterns.git --git-path $tmpl --global
done

echo "\n All patterns available via: \n\nmason list --global" 
