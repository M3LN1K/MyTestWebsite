<?php
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");

$APPLICATION->SetTitle("Блог пользователя");

// Хлебные крошки
$APPLICATION->AddChainItem("Блоги", "/blog/");
$APPLICATION->AddChainItem("Блог пользователя");

// Компонент блога
$APPLICATION->IncludeComponent(
    "bitrix:blog",
    ".default",
    array(
        "SEF_MODE" => "N",
        "USER_ID" => $_REQUEST["user_id"] ?: 1,
        "USER_VAR" => "user_id",
        "BLOG_VAR" => "blog",
        "POST_VAR" => "post_id",
        "PATH_TO_BLOG" => "/blog/user/#user_id#/",
        "PATH_TO_POST" => "/blog/user/#user_id#/post/#post_id#/",
        "SET_TITLE" => "Y",
        "SHOW_RATING" => "Y",
        "RATING_TYPE" => "like"
    )
);

require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");
?>