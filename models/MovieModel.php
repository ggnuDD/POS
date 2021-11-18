<?php
class ItemModel extends Database
{

    function get_all_item()
    {
        $sql = "SELECT * from item ";
        return $this->get_list($sql);
    }
    function get_item_category($id_category)
    {
        $sql = "SELECT * FROM item WHERE category_id = $id_category";
        return $this->get_list($sql);
    }
    function get_item_info($id)
    {
        $sql = "SELECT * FROM item where id=$id";
        return $this->get_one($sql);
    }
}
