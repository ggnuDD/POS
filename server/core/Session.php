<?php
class Session{
    
    function __construct()
    {
        session_start();
    }
    function ss_set($key,$val)
    {
        $_SESSION[$key] = $val;
    }
    function ss_get($key){
        return $_SESSION[$key]?$_SESSION[$key]:false;
    }
    function ss_remove($key)
    {
        if(isset($_SESSION[$key]))
        {
            unset($_SESSION[$key]);
        }
    }
    function ss_destroy(){
        session_destroy();
    }
}

?>