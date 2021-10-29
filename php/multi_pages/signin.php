<?php session_start(); ?>

<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8" />
        <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
        rel="stylesheet"
    >
        <title>Inscription</title>
    </head>
 
    <body class="d-flex flex-column min-vh-100">
        <div class="container">

        <?php
        include('header.php');
        if(isset($_POST['signmail']) && isset($_POST['signpwd']) && isset($_POST['confpwd']) && isset($_POST['signage']) && isset($_POST['signname'])) {
            if($_POST['signpwd']==$_POST['confpwd']) {
                foreach($registeredUsers as $user) {
                    if($user['email'] == $_POST['signmail'] || $user['password'] == $_POST['signpwd']) {
                        $errorMessageSignin = "Erreur ! Un utilisateur existe déjà avec ce nom de compte ou ce mot de passe !";
                    }
                }
                if(!isset($errorMessageSignin)) {
                    $_SESSION['signedUser'] = [
                        'age' => $_POST['signage'],
                        'username' => $_POST['signname'],
                        'email' => $_POST['signmail'],
                        'password' => $_POST['signpwd'],
                    ];
                    $_SESSION['loggedUsr'] = [
                        'email' => $_POST['signmail'],
                        'username' => $_POST['signname'],
                    ];
                    addUser($_SESSION['signedUser'],$cnx);                    
                }
            } else {
                $errorMessageSignin = "Erreur ! Les mots de passe ne correspondent pas !";
            }
        } else {
            if(isset($_POST['signmail']) || isset($_POST['signpwd']) || isset($_POST['confpwd']) || isset($_POST['signage']) || isset($_POST['signname'])) {
                $errorMessageSignin = "Erreur ! L'un des champs n'est pas rempli !";
            }
        }
    
    ?>


            <?php if(!isset($_SESSION['signedUser'])):?>
                <form action="signin.php" method="post">
                    <?php if(isset($errorMessageSignin)):?>
                        <p style='color:red;'><?php echo $errorMessageSignin?></p>
                    <?php endif;?>
                    <fieldset>
                        <legend>Inscription au site :</legend>
                        <div class="mb-3">
                            <label for="signname" class="form-label">Fullname or Username</label>
                            <input type="texte" class= "form-control" name="signname" id="signname">
                        </div>
                        <div class="mb-3">
                            <label for="signage" class="form-label">Age</label>
                            <input type="number" class= "form-control" name="signage" id="signage">
                        </div>
                        <div class="mb-3">
                            <label for="signmail" class="form-label">E-Mail</label>
                            <input type="email" class= "form-control" name="signmail" id="signmail">
                        </div>
                        <div class="mb-3">
                            <label for="signpwd" class="form-label">Mot de passe</label>
                            <input type="password" class= "form-control" name="signpwd" id="signpwd">
                        </div>
                        <div class="mb-3">
                            <label for="confpwd" class="form-label">Confirmation de mot de passe</label>
                            <input type="password" class= "form-control" name="confpwd" id="confpwd">
                        </div>
                        <button type="submit" class="btn btn-primary">Sign in</button><br/>
                    </fieldset>
                </form>
            <?php endif;?>
            <?php if(isset($_SESSION['signedUser'])):?>
                    <p style='text-align:center;'>Votre compte a bien été créé ! Veuillez vous connectez après avoir cliqué sur le bouton ci-dessous.</p><br/>
                    <form action="index.php">
                    <button class='btn btn-primary' type='submit'>Aller à la page principale</button>
                    </form>
            <?php endif;?>
            <?php include('footer.php')?>
        </div>
    </body>
</html>

