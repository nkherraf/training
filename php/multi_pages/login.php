<?php
if(isset($_POST['usr']) && isset($_POST['pwd'])) {
    foreach($registeredUsers as $user) {
        if($user['email'] == $_POST['usr'] && $user['password'] == $_POST['pwd']) {
            $_SESSION['loggedUsr'] = [
                'email' => $user['email'],
                'username' => $user['full_name'],
            ];
        }
    }
    if(!isset($loggedUsr)) {
        $errorMessage = "Erreur ! L'email ou le mot de passe renseigné ne sont pas valides !";
    }
}

?>

<?php if(!isset($_SESSION['loggedUsr'])):?>
    <form action="index.php" method="post">
        <fieldset>
            <legend>Connexion au site : </legend>
            <div class="mb-3">
                <label for="usr" class="form-label">E-Mail</label>
                <input type="email" class= "form-control" name="usr" id="usr">
            </div>
            <div class="mb-3">
                <label for="pwd" class="form-label">Nom</label>
                <input type="password" class= "form-control" name="pwd" id="pwd">
            </div>
            <input type="hidden" name="logged">
            <button type="submit" class="btn btn-primary">Log in</button><br/>
        </fieldset>
    </form>
    <?php if(isset($errorMessage)):?>
        <p> <?php echo $errorMessage;?></p>
    <?php endif;?>
    <form action="signin.php">
    <button type="submit" class="btn btn-primary-dark">Sign in</button><br/>
    </form>
<?php endif;?>