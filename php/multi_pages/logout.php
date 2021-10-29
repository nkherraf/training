<?php
        session_start();
        session_destroy();
        include('header.php');
?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
        rel="stylesheet"
    >
        <title>Déconnexion</title>
    </head>
 
    <body class="d-flex flex-column min-vh-100">
        <div class="container">

           <p style='text-align:center;'>Vous avez bien été déconnecté ! Cliquer sur le bouton ci-dessous pour revenir au site.</p><br/>
                    <form action="index.php">
                    <button class='btn btn-primary' type='submit'>Revenir sur le site</button>
                    </form>
        <?php include('footer.php')?>
        </div>
    </body>
</html>

