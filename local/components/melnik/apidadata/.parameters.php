<?php

if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();

$arComponentParameters = [
    "GROUPS" => [],
    "PARAMETERS" => [
        "DADATA_API_KEY" => [
            "PARENT" => "BASE",
            "NAME" => "API ключ DaData",
            "TYPE" => "STRING",
            "DEFAULT" => "",
            "REFRESH" => "N",
        ],
        "INPUT_ID" => [
            "PARENT" => "BASE",
            "NAME" => "ID поля ввода",
            "TYPE" => "STRING",
            "DEFAULT" => "",
            "REFRESH" => "N",
        ],
        "LABEL" => [
            "PARENT" => "BASE",
            "NAME" => "Текст подписи",
            "TYPE" => "STRING",
            "DEFAULT" => "Введите адрес:",
            "REFRESH" => "N",
        ],
        "INPUT_PLACEHOLDER" => [
            "PARENT" => "BASE",
            "NAME" => "Placeholder для поля",
            "TYPE" => "STRING",
            "DEFAULT" => "Например: Москва, ул. Тверская",
            "REFRESH" => "N",
        ],
    ],
];