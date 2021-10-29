<?php session_start(); ?>

<?php
$img=false;

if(!isset($_POST['email']) || !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL) || !isset($_POST['message']) || empty($_POST['message'])) {
    echo "Il faut obligatoirement un email valide ou un message !";
    return;
} else {
    $mail = $_POST['email'];
    $msg = $_POST['message'];
}

if(isset($_FILES['screen']) && $_FILES['screen']['error'] == 0) {
    $file=$_FILES['screen'];
    $fileInf = pathinfo($file['name']);
    $exten = $fileInf['extension'];
    $allowedExt = ['jpeg','png','jpg'];
    if(in_array($exten,$allowedExt)) {
        if(isset($_POST['ln']) && !empty($_POST['ln'])) {
            $fileName = 'screen-'.$_POST['ln'];
        } else {
            $fileName = 'screen_unknown';
        }        
        move_uploaded_file($file['tmp_name'],'uploads/'. $fileName .  '.' . $exten);
        $img=true;
    }
    
}


?>
<!DOCTYPE html>
<html lang="en">
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
<body>
<?php include('header.php')?>

<h1>Message bien reçu !</h1>
        
<div class="card">
    
    <div class="card-body">
        <h5 class="card-title">Rappel de vos informations</h5>
        <p class="card-text"><b>Email</b> : <?php echo $_POST['email']; ?></p>
        <p class="card-text"><b>Message</b> : <?php echo htmlspecialchars($_POST['message']); ?></p>
        <?php if($img):?>
        <p class="card-text"><b>Image envoyée</b> : 
        <img src=<?php echo 'uploads/'. $fileName .  '.' . $exten; ?> alt="Test"></p>
        <?php endif;?>
    </div>
</div>
    
</body>
</html>