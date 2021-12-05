<?php


class Account extends Controller
{

    function Register($username, $password, $name, $birthday)
    {
        $account = $this->model('AccountModel');
        echo ($account->setAccount($username, $password, $name, $birthday));
    }
    function CheckUsername($username)
    {
        $account = $this->model("AccountModel");
        echo $account->check_account_taken($username);
    }
    function Login($username, $password)
    {
        $account = $this->model('AccountModel');
        if (!$account->get_account($username)) {
            echo 'Tài khoản không tồn tại';
        } else if (md5($password) != $account->get_account($username)['password']) {
            echo 'Mật khẩu không đúng';
        } else {
            echo 'valid';
        }
    }
}
