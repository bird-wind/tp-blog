<?php
/**
 * Created by PhpStorm.
 * User: Administrator
 * Date: 2017/2/9
 * Time: 22:19
 */

return [
    'template'  =>  [
    'layout_on'          =>  true,
    'layout_name'        =>  'layout/default',
    //是否需要开启模版缓存,false为不开启,每次都会重新编译
    'tpl_cache'          => false,
     // 标签库标签开始标记
     'taglib_begin' => '{',
     //// 标签库标签结束标记
     'taglib_end'   => '}',
    //配置模版常量
    'tpl_replace_string' => [
        '__PUBLIC__'    => '/static',
    ]
]
];