<?php

require_once "vendor/autoload.php";
use Abraham\TwitterOAuth\TwitterOAuth;

require_once "data/getVars.php";

$headerString = "Access-Control-Allow-Origin: " + $urlRoot;
header($headerString);

define('CONSUMER_KEY', $CONSUMER_KEY);
define('CONSUMER_SECRET', $CONSUMER_SECRET);
define('ACCESS_TOKEN', $ACCESS_TOKEN);
define('ACCESS_TOKEN_SECRET', $ACCESS_TOKEN_SECRET);

$connection = new TwitterOAuth(CONSUMER_KEY, CONSUMER_SECRET, ACCESS_TOKEN, ACCESS_TOKEN_SECRET);
$connection->setTimeouts(20, 30); // connection, request
// if ($urlRoot != 'http://localhost/test/'){
$connection->setProxy([
    'CURLOPT_PROXY' => $proxyHost,
    'CURLOPT_PROXYUSERPWD' => '',
    'CURLOPT_PROXYPORT' => $proxyPort,
]);    
// }

$content = $connection->get("account/verify_credentials");

if ($connection->getLastHttpCode() == 200) {
    // Connection was verified
    $query = htmlspecialchars($_GET["q"]);
    $maxResults = htmlspecialchars($_GET["maxResults"]);
    $geocode = htmlspecialchars($_GET["geocode"]);
    // $query = "voting"; // debug
    // $maxResults = 3; // debug
    // $geocode = "32,-97,25mi"; // debug

    $tweets = $connection->get("search/tweets", ["q" => $query, "geocode" => $geocode, "count" => $maxResults, "tweet_mode" => "extended"]);
    $tweetsJSON = json_encode($tweets);

    echo $tweetsJSON;

} else {
    // Handle error case
    echo("Connection to Twitter failed, error code: " + $connection->getLastHttpCode());
}

?>