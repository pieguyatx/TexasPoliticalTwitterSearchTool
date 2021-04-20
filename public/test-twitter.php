<?php

// Test for using Twitter API over PHP -->
// See: https://www.web-development-blog.com/twitter-search-api/

// debug start
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
// debug end

require_once('TwitterAPIExchange.php');
require_once('data/getVars.php');


echo '<h1>Test page for Twitter API</h1>';

define('CONSUMER_KEY', $CONSUMER_KEY);
define('CONSUMER_SECRET', $CONSUMER_SECRET);
define('ACCESS_TOKEN', $ACCESS_TOKEN);
define('ACCESS_TOKEN_SECRET', $ACCESS_TOKEN_SECRET);

/** Set access tokens here - see: https://dev.twitter.com/apps/ **/
$settings = array(    
    'oauth_access_token' => ACCESS_TOKEN,    
    'oauth_access_token_secret' => ACCESS_TOKEN_SECRET,    
    'consumer_key' => CONSUMER_KEY,    
    'consumer_secret' => CONSUMER_SECRET
);

$url = "https://api.twitter.com/1.1/statuses/user_timeline.json";
$requestMethod = "GET";
$getfield = '?screen_name=iagdotme&count=20';

$twitter = new TwitterAPIExchange($settings);
echo "<pre>";

echo $twitter->setGetfield($getfield)             
    ->buildOauth($url, $requestMethod)             
    ->performRequest();

echo "</pre>";


?>