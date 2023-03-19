#!/bin/bash

echo "> Installing JavaScript/TypeScript Patterns"

templates=($(curl https://raw.githubusercontent.com/arnat-technologies/js-patterns/main/list))

for tmpl in "${templates[@]}"; do
  echo "> Installing js-pattern $tmpl"
  mason remove js-pattern-$tmpl --global
  mason add js-pattern-$tmpl --git-url https://github.com/arnat-technologies/js-patterns.git --git-path bricks/$tmpl --global
done

echo ""
echo "All patterns available via:"
echo "mason list --global"
echo ""
