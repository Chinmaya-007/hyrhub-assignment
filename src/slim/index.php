<?php
use \Psr\Http\Message\ServerRequestInterface as Request;
use \Psr\Http\Message\ResponseInterface as Response;

require '../../vendor/autoload.php';
require './src/config/db.php';

$app = new \Slim\App;
$app->get('/{id}', function (Request $request, Response $response, array $args) {
    


    $id = $request->getAttribute('id');
    $sql= "SELECT * FROM birthdays";
    
    try{
        $db= new db();
        $db= $db->connect();

        $stmt= $db->query($sql);
        $customer=$stmt->fetchAll(PDO::FETCH_OBJ);
        $db =null;
        echo json_encode($customer);
    }catch(PDOException $e){
        echo '{"error":{"text":'.$e->getMessage().'}';

    }


});
$app->run();