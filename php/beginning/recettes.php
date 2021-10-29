<?php

$recipes= [
    ['Crêpes salées','[...]','lorenzo@gmail.com',true],
    ['Pâtes poulet champi','[...]','lorenzo@gmail.com',false]
];

?>

<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Les recettes</title>
    </head>
    <body>

        <ul>
            <?php for($line=0;$line<2;$line++): ?>
                <li><?php echo $recipes[$line][0]. " (Auteur : ".$recipes[$line][2].')'; ?></li>
            <?php endfor; ?>
        </ul>

    </body>
</html>