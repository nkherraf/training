<?php
// Users

include('config/cnx.php');

$sqlUsers = 'SELECT * FROM users';
$usrStatement = $cnx->prepare($sqlUsers);
$usrStatement->execute();
$registeredUsers = $usrStatement->fetchAll();

$sqlRecipe = 'SELECT * FROM recipes WHERE is_enabled is TRUE';
$recipeState = $cnx->prepare($sqlRecipe);
$recipeState->execute();
$recipes = $recipeState->fetchAll();

?>