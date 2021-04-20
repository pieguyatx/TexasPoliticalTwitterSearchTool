<?php

// Test for using Twitter API over PHP -->
// See: https://www.web-development-blog.com/twitter-search-api/

// debug start
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
// debug end

require_once "vendor/autoload.php";
use Abraham\TwitterOAuth\TwitterOAuth;

require_once "data/getVars.php";


echo '<h1>Test page for Twitter API</h1>';

define('CONSUMER_KEY', $CONSUMER_KEY);
define('CONSUMER_SECRET', $CONSUMER_SECRET);
define('ACCESS_TOKEN', $ACCESS_TOKEN);
define('ACCESS_TOKEN_SECRET', $ACCESS_TOKEN_SECRET);

$connection = new TwitterOAuth(CONSUMER_KEY, CONSUMER_SECRET, ACCESS_TOKEN, ACCESS_TOKEN_SECRET);
$connection->setTimeouts(20, 30); // connection, request

$content = $connection->get("account/verify_credentials");

$tweets = $connection->get("search/tweets", ["q" => "voting OR voted", "point_radius" => "[-97.733330 30.266666 25mi]", "count" => 10]);
$tweetsJSON = json_encode($tweets);

echo "<pre>";
echo $tweetsJSON;
echo "</pre>";

?>