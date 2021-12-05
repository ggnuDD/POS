<?php
class AccountModel extends Database
{
    //set Account
    private $level_account = 2;
    function setAccount($username, $password, $name, $birthday)
    {

        $password = md5($password);
        $sql = "INSERT INTO account_info(username,password,level,name,birthday) VALUES ('$username','$password','$this->level_account','$name','$birthday')";
        return $this->query($sql);
    }
    function check_account_taken($username)
    {
        return ($this->get_account($username)) ? 'Tên tài khoản đã được sử dụng. Hãy thử tên khác.' : 'valid';
    }
    function get_account($username)
    {
        $sql = "SELECT * FROM account_info WHERE username ='$username'";
        return $this->get_item($sql);
    }
}
