<?php
class MovieModel extends Database
{

    function get_all_movie()
    {
        $sql = "SELECT * from DSPHIM ";
        return $this->get_list($sql);
    }
    function get_movie_info($id)
    {
        $sql = "SELECT * FROM DSPHIM where id=$id";
        return $this->get_one($sql);
    }
}
