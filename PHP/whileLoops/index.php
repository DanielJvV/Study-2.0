<?php

$i = 5;

while ($i < 55) {

    echo $i."<br>";

    $i = $i + 5;
};

$family = array("Danie", "Louis", "Jorne", "Babsie");
$i = 0;

while ($i < sizeof($family)) {
    
    echo $family[$i]."<br>";
    $i++;
};

?>