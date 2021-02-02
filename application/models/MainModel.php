<?php
/**
 * Created by PhpStorm.
 * User: GaoComet
 * Date: 12/2/2017
 * Time: 12:49 PM
 */
defined('BASEPATH') OR exit('No direct script access allowed');

class MainModel extends CI_Model{
    function __construct()
    {
        parent::__construct();
        $this->load->database();
    }
    function getRequest($id, $aircraft, $from, $to){
        $num1 = sizeof($aircraft);
//        $where = "request_id=".$id.$where1." AND from>=".$from." AND to<=".$to;
        $this->db->select('*');
        $this->db->from('request');
        if ($id != "")
            $this->db->where('request_id', $id);
        if ($from != "")
            $this->db->where('from>=', $from);
        if ($to != "")
            $this->db->where('to<=', $to);
        if($num1 == 1){
            $where1 = "aircraft=".$aircraft[0];
            $this->db->where('aircraft', $aircraft[0]);
        }elseif ($num1 > 1){
            $this->db->where('aircraft', $aircraft[0]);
            for($index=1;$index<$num1;$index++){
                $this->db->or_where('aircraft', $aircraft[$index]);
            }
        }
        $query = $this->db->get();
        return $query->result();
    }
    function getRequestAll(){
        $this->db->select('*');
        $this->db->from('request');
        $query = $this->db->get();
        return $query->result();
    }
    function getMission($id, $aircraft, $from, $to){
        $num2 = sizeof($aircraft);
        $this->db->select('*');
        $this->db->from('mission');
        if ($id != "")
            $this->db->where('mission_request_no', $id);
        if ($from != "")
            $this->db->where('date>=', $from);
        if ($to != "")
            $this->db->where('date<=', $to);
        if($num2 == 1){
            $this->db->where('aircraft_name', $aircraft[0]);
        }elseif ($num2 > 1){
            $this->db->where('aircraft_name', $aircraft[0]);
            for($index=1;$index<$num2;$index++){
                $this->db->or_where('aircraft_name', $aircraft[$index]);
            }
        }
        $query = $this->db->get();
        return $query->result();
    }
    function getMissionAll(){
        $this->db->select('*');
        $this->db->from('mission');
        $query = $this->db->get();
        return $query->result();
    }
    function getAircraft($ids){

    }
    function getAircraftAll(){
        $this->db->select('*');
        $this->db->from('aircraft');
        $query = $this->db->get();
        return $query->result();
    }
}