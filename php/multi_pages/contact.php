<?php session_start(); ?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Site de recettes - Formulaire de Contact</title>
    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" 
        rel="stylesheet"
    >
</head>
<body class="d-flex flex-column min-vh-100">
    <?php include('header.php')?>
    <div class="container">

    <?php include_once('header.php'); ?>
        <h1>Contactez nous</h1>
        <form action="submit_contact.php" method="post" enctype="multipart/form-data">
        <div class="mb-3">
                <label for="fn" class="form-label">Prénom</label>
                <input type="text" class= "form-control" name="fn" id="fn" value=<?php echo isset($_GET['prenom'])?$_GET['prenom']:"";?>>
            </div>
            <div class="mb-3">
                <label for="ln" class="form-label">Nom</label>
                <input type="text" class= "form-control" name="ln" id="ln" value=<?php echo isset($_GET['nom'])?$_GET['nom']:"";?>>
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" name="email" aria-describedby="email-help">
                <div id="email-help" class="form-text">Nous ne revendrons pas votre email.</div>
            </div>
            <div class="mb-3">
                <label for="message" class="form-label">Votre message</label>
                <textarea class="form-control" placeholder="Exprimez vous" id="message" name="message"></textarea>
            </div>
            <div class="mb-3">
                <label for="screen" class="form-label">Image utile (Optionnel)</label>
                <input type="file" name="screen" id="screen" class="form-control">
            </div>
            <button type="submit" class="btn btn-primary">Envoyer</button>
        </form>
        <br />
    </div>

    <?php include_once('footer.php'); ?>
</body>
</html>
