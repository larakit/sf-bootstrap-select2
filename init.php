<?php
\Larakit\StaticFiles\Manager::package('larakit/sf-bootstrap-select2')
    ->setSourceDir('public')
    ->usePackage('larakit/sf-bootstrap')
    ->cssPackage('css/select2.css')
    ->jsPackage('js/select2.js')
    ->jsPackage('js/select2-init.js');