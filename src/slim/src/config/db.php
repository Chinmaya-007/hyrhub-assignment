<?php 
    class db{
        private $username = 'root';
        private $password = 'root';
        private $dbname = 'sample-login';
        private $servername = 'localhost';
        

        public function connect(){
            
            $conn= "mysql:host=$this->servername;dbname=$this->dbname";
            $dbConnection = new PDO($conn,$this->username,$this->password);
            $dbConnection->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
            return $dbConnection;
        }

    }