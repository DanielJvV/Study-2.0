<?php

$family = array("Rob", "Kirsten", "Tommy", "Ralphie");

foreach ($family as $key => $value) {

    $family[$key] = $value." Percival";
    
    echo "Array item ".$key." is ".$value."<br>";
};

for ($i = 0; $i < sizeof($family); $i++) {
    echo $family[$i]."<br>";
};


for ($i = 2; $i <= 30; $i = $i + 2) {
    echo $i."<br>";
};



?>