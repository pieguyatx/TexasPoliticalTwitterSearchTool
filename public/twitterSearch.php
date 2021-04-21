<?php

header("Access-Control-Allow-Origin: http://localhost/test/");

require_once "vendor/autoload.php";
use Abraham\TwitterOAuth\TwitterOAuth;

require_once "data/getVars.php";

define('CONSUMER_KEY', $CONSUMER_KEY);
define('CONSUMER_SECRET', $CONSUMER_SECRET);
define('ACCESS_TOKEN', $ACCESS_TOKEN);
define('ACCESS_TOKEN_SECRET', $ACCESS_TOKEN_SECRET);

$connection = new TwitterOAuth(CONSUMER_KEY, CONSUMER_SECRET, ACCESS_TOKEN, ACCESS_TOKEN_SECRET);
$connection->setTimeouts(20, 30); // connection, request

$content = $connection->get("account/verify_credentials");

$query = htmlspecialchars($_GET["q"]);

$tweets = $connection->get("search/tweets", ["q" => $query, "point_radius" => "[-97.733330 30.266666 25mi]", "count" => 10]);
$tweetsJSON = json_encode($tweets);

// echo "<pre>";
echo $tweetsJSON;
// echo "</pre>";

?>