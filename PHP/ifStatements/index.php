<?php

$user = "daniel";

if ($user == "daniel") {
    echo "Hello Daniel!";
} else {
    echo "I don't know you!";
};

$age = 25;

echo "<br><br>";

if ($age >= 18 || $user == "daniel") {
    echo "You may proceed!";
} else {
    echo "Please exit this website!";
};

?>