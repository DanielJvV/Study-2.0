<?php

$myArray = array("Rob", "Kirsten", "Tommy", "Ralphie");

$myArray[] = "Katie";
// Adds an item to the back of an array.

print_r($myArray);

echo "<p>".$myArray[1]."</p>";

$anotherArray[0] = "pizza";

$anotherArray[1] = "yoghurt";

print_r($anotherArray);

echo "<br><br>";

$thirdArray = array(
"France" => "French",
"USA" => "English",
"Germany" => "German");

unset($thirdArray["France"]);
//Removes an item from an array. Can also unset a variable.

print_r($thirdArray);

echo "<br><br>";

echo sizeof($thirdArray);
// sizeof gives the length of the array



?>