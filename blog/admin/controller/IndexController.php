<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/2/9
 * Time: 22:13
 */
namespace app\admin\controller;

class IndexController extends BaseController
{
    public function index(){
        $this->assign('title', '首页');
        return $this->fetch('index');
    }

    public function welcome(){
        $this->assign('title', '欢迎页');
        return $this->fetch('welcome');
    }
}