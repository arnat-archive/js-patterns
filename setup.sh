#!/bin/bash

echo "> Installing JavaScript/TypeScript Patterns"

templates=( $(cat ./list) )
 
for tmpl in "${templates[@]}"
do
    echo "> Installing js-pattern $tmpl"
    mason remove js-pattern-$tmpl --global
    mason add js-pattern-$tmpl --git-url https://github.com/arnat-technologies/js-patterns.git --git-path bricks/$tmpl --global
done

echo "\n All patterns available via: \n\nmason list --global" 
