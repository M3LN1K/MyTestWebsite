<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Мебельная компания");
?>
<?php
$APPLICATION->IncludeComponent(
    "bitrix:socialnetwork",
    "",
    array(
        "MESSAGE_COUNT" => "20",
        "DATE_TIME_FORMAT" => "d.m.Y H:i:s",
        "PATH_TO_BLOG" => "/blog/user/#user_id#/",
        "PATH_TO_POST" => "/blog/user/#user_id#/post/#post_id#/",
        "PATH_TO_USER" => "/club/user/#user_id#/",
        "PATH_TO_SMILE" => "/bitrix/images/blog/smile/",
        "USER_ID" => "1", // ID пользователя
        "CACHE_TYPE" => "A",
        "CACHE_TIME" => "3600",
        "SET_TITLE" => "Y",
        "ALLOW_POST_CODE" => "Y",
        "SHOW_RATING" => "Y", // Включить рейтинг (лайки)
        "RATING_TYPE" => "like",
        "USE_SHARE" => "Y"
    )
);
?>

<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>