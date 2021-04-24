<?php

include "db.php";

// Check connection
if($conn === false){
    die("ERROR: Could not connect. " . mysqli_connect_error());
}

$userid = $_POST["userID"];
$time = $_POST["time"];
$changes = $_POST["changes"];
$Ukraine = $_POST["countryData"]["Ukraine"];
$Japan = $_POST["countryData"]["Japan"];
$Korea = $_POST["countryData"]["Korea"];
$Germany = $_POST["countryData"]["Germany"];
$Venezuela = $_POST["countryData"]["Venezuela"];
$Italy = $_POST["countryData"]["Italy"];
$Bangladesh = $_POST["countryData"]["Bangladesh"];
$Romania = $_POST["countryData"]["Romania"];
$Lithuania = $_POST["countryData"]["Lithuania"];
$Philippines = $_POST["countryData"]["Philippines"];
$UK = $_POST["countryData"]["United Kingdom"];
$Portugal = $_POST["countryData"]["Portugal"];
$Mexico = $_POST["countryData"]["Mexico"];
$Greece = $_POST["countryData"]["Greece"];
$Russia = $_POST["countryData"]["Russia"];
$Poland = $_POST["countryData"]["Poland"];
$Argentina = $_POST["countryData"]["Argentina"];
$Australia = $_POST["countryData"]["Australia"];
$Bulgaria = $_POST["countryData"]["Bulgaria"];
$Q1 = $_POST["question1"];
$Q2 = 'test';
$Q3 = 'test';

$sql = "INSERT INTO userdata (userID, time_seconds, changes_dropdown, Ukraine, Japan, Korea, Germany, Venezuela, Italy, Bangladesh, Romania, Lithuania, Philippines, UK, Portugal, Mexico, Greece, Russia, Poland, Argentina, Australia, Bulgaria, Q1, Q2, Q3)  VALUES ($userid, $time, $changes, $Ukraine, $Japan, $Korea, $Germany, $Venezuela, $Italy, $Bangladesh, $Romania, $Lithuania, $Philippines, $UK, $Portugal, $Mexico, $Greece, $Russia, $Poland, $Argentina, $Australia, $Bulgaria, '$Q1', 'Q2', 'Q3')";

if(mysqli_query($conn, $sql)){
    echo "Records inserted successfully.";
} else{
    echo "ERROR: Could not able to execute $sql. " . mysqli_error($conn);
}
 
// Close connection
mysqli_close($conn);

print_r("200");

