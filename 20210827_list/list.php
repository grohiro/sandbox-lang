<?php

function p($a)
{
    if (is_array($a)) {
        foreach ($a as $k => $n) {
            echo "[$k]";
            echo " -> ";
            echo $n;
            echo "\n";
        }
    } else {
        echo $a;
        echo "\n";
    }
}


$list = [];
$list[] = 1;
$list[] = 2;
$list[] = 3;
$list[] = 4;
$list[] = 5;

p($list);
p(count($list));

unset($list[0]);

p($list);
p(count($list));

$sub = array_slice($list, 2, 2);
p($sub);
p(count($sub));
