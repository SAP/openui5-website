#!/bin/bash

git ls-remote --heads origin |
grep -oh "refs/heads/.*" |
sed "s/refs\/heads\///g" |
grep -v "gh-pages" |
perl -e 'print "<html><body><h1>Branches:</h1><ul>"; while(<>) { chop $_; print "<li><a href=\"./$_\">$_</a></li>";} print "</ul></body></html>"' > index.html