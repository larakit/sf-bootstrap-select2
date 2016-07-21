<?php
\Larakit\StaticFiles\Manager::package('select2/select2')
    ->setSourceDir('dist')
    ->usePackage('larakit/sf-bootstrap')
    ->cssPackage('css/select2.min.css')
    ->jsPackage('js/select2.full.min.js');