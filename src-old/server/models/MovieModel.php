<?php
class MovieModel extends Database
{

    function getAllMovie()
    {
        $data = array();
        $sql = "SELECT * from DSPHIM";
        $data = $this->get_all_item($sql);
        return $data;
    }
    
    function getMovie($id)
    {
        $data = array();
        $id = (int)$id;
        $sql = "SELECT * FROM DSPHIM where id='$id'";
        $data = $this->get_item($sql);
        return $data;
    }
}
