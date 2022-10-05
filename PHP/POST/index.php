<?php



if ($_POST) {

  $names = array("Danie", "Louis", "Jorne", "Babsie");

  $known = false;

  for ($i = 0; $i < sizeof($names); $i++) {

    if ($names[$i] == $_POST["name"]) {

     $known = true;

    };

  };

  if ($known) {

    echo "Hi there ".$_POST["name"]."!";

  } else {

    echo "Sorry I don't know you!";

  };
};


?>


<p>Please enter your name!</p>

<form method="post">

<input type="text" name="name">

<input type="submit" value="Go!">

</form>

