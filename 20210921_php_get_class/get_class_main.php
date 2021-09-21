<?php
class Base
{
    public function __construct()
    {
        echo get_class($this)."\n";
    }
}

class Foo extends Base
{
}

$foo = new Foo;

echo $clazz = get_class($foo)."\n";

echo str_replace(__NAMESPACE__.'\\', '', $clazz);

