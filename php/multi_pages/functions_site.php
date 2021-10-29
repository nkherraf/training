<?php


function getValidRecipes(array $arr) : array
{
    foreach ($arr as $li) {
        if(array_key_exists('is_enabled',$li)?$li['is_enabled']:false) {
            $finalArray[]=$li;
        }
    }
    return $finalArray;
}

function displayAuthor(string $id, array $auth) : string {
    foreach($auth as $au) {
        if(array_key_exists('email',$au) && $id==$au['email']) {
            return $au['full_name'] . ', ' . $au['age'] . ' ans.';
        }
    }
}

function addUser($usr,$con) {
    $sqlQuery = 'INSERT INTO users (age,full_name,email,password) VALUES (:age,:username,:email,:pwd);';
    $state = $con->prepare($sqlQuery);
    $state->execute([
        'age' => $usr['age'],
        'username' => $usr['username'],
        'email' => $usr['email'],
        'pwd' => $usr['password'],
    ]);
}

?>