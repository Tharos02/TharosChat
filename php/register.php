<?php
$connection = mysqli_connect('localhost', 'root', '', 'tharoschat');

$salt = 'TharosChat0211';

if(!$connection) {
    echo mysqli_connect_error();
}else {
    echo "Verbindung ist da";
}

$name = mysqli_real_escape_string($connection, $_POST['name']);
$password = mysqli_real_escape_string($connection, $_REQUEST['password']);
$email = mysqli_real_escape_string($connection, $_REQUEST['email']);

$enc_password = password_hash($password, PASSWORD_BCRYPT);

$insert_query = "INSERT INTO user (name, password, email) VALUES ('$name', '$enc_password', '$email')";

if(mysqli_query($connection, $insert_query)) {
    echo "Eintrag wurde erstellt";
} else {
    echo "ERROR: Es konnte nichts eingefuegt werden $insert_query. " . mysqli_error($connection);
}



mysqli_close($connection);