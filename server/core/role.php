<?php
// if (!defined('IN_SITE')) die('The request not found');

require_once "Session.php";

$role = new Session();
// set loggin for user
function set_logged($username, $level)
{
    ss_set('ss_user_token', array(
        'username' => $username,
        'level' => $level
    ));
}

//set logout for user


function set_logout()
{
    ss_remove('ss_user_token');
}



//check is logged? return username and level

function is_logged()
{
    $user = ss_get('ss_user_token');
    return $user;
}


//check is admin?

function is_admin()
{
    $user = is_logged();
    if (!empty($user['level']) && $user['level'] == '1' && $user['username'] = 'admin') {
        return true;
    }
    return false;
}



function get_current_username()
{
    $user = is_logged();
    return (isset($user['username'])) ? $user['username'] : '';
}

function get_current_level()
{
    $user = is_logged();
    return (isset($user['level'])) ? $user['level'] : '';
}
