<?php
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();

$arComponentDescription = [
    "NAME" => "Поиск адресов DaData",
    "DESCRIPTION" => "Компонент для поиска адресов через сервис DaData",
    "ICON" => "/images/icon.gif",
    "SORT" => 10,
    "CACHE_PATH" => "Y",
    "PATH" => [
        "ID" => "content",
        "CHILD" => [
            "ID" => "dadata",
            "NAME" => "DaData"
        ]
    ],
    "COMPLEX" => "N",
];