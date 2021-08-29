<?php

$array = [
    'foo' => 'bar',
    'hoge' => 'fuga',
];

print_r($array);

$array['piyo'] = 'piyopiyp';

print_r($array);

unset($array['foo']);

print_r($array);

echo isset($array['hoge']) ? "found" : "not found";
echo "\n";
echo isset($array['unknown']) ? "found" : "not found";
echo "\n";

foreach ($array as $key => $value) {
    echo "$key => $value\n";
}
