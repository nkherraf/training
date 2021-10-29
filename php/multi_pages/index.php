<?php session_start();?>
<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
        rel="stylesheet"
    >
        <title>Mon super site</title>
    </head>
 
    <body class="d-flex flex-column min-vh-100">
        <div class="container">
            <?php  
                include('header.php');
                include('login.php');
            ?>
            <?php if(isset($_SESSION['loggedUsr'])):?>
                <h1>Liste des recettes de cuisine</h1>
                <?php foreach(getValidRecipes($recipes) as $recipe) : ?>
                    <article>
                        <h3><?php echo $recipe['title']; ?></h3>
                        <div><?php echo $recipe['recipe']; ?></div>
                        <i><?php echo displayAuthor($recipe['author'], $registeredUsers); ?></i>
                    </article>
                <?php endforeach ?>
            <?php endif;?>
            <br/>
        </div>
        <?php include('footer.php')?>
        
    </body>
</html>