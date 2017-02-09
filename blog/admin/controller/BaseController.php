<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/2/9
 * Time: 22:14
 */

namespace app\admin\controller;
use \think\Controller;
use think\Request;

class BaseController extends Controller
{
    public function __construct(Request $request = null)
    {
        parent::__construct($request);
    }
}