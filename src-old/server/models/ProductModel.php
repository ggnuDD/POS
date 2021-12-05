<?php
class ProductModel extends Database
{
    function getProduct($id)
    {
        $data = array();
        $id = (int)$id;
        $sql = "SELECT * FROM product WHERE id ='$id'";
        $data = $this->get_item($sql);
        return $data;
    }
    function getAllProduct()
    {
        $data = array();
        $sql = "SELECT * FROM product";
        $data = $this->get_all_item($sql);
        return $data;
    }
}
