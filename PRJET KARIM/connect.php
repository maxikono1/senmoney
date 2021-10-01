<?php
$databaseHost = 'localhost';
$databaseName =  'senmoneydb';
$databaseUsername = 'root';
$databasePassword = ''; 

try{
    $dbConn = new PDO("mysql:host={$databaseHost};dbname={$databaseName}",$databaseUsername,$databasePassword);


    $dbConn->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);

        echo "Connexion OK";
}
catch(PDOException $e){
        echo $e->getMessage();

}
?>