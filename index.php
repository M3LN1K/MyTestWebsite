<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Главная");
$APPLICATION->SetPageProperty("TITLE", "Главная | We project");
?>
<!--Слайдер на главной странице сайта -->
 <?$APPLICATION->IncludeComponent(
	"bitrix:news.list",
	"mainpage_top_slider",
	[
		"ACTIVE_DATE_FORMAT" => "",
		"ADD_SECTIONS_CHAIN" => "N",
		"AJAX_MODE" => "N",
		"AJAX_OPTION_ADDITIONAL" => "",
		"AJAX_OPTION_HISTORY" => "N",
		"AJAX_OPTION_JUMP" => "N",
		"AJAX_OPTION_STYLE" => "N",
		"CACHE_FILTER" => "N",
		"CACHE_GROUPS" => "N",
		"CACHE_TIME" => "36000000",
		"CACHE_TYPE" => "N",
		"CHECK_DATES" => "Y",
		"DETAIL_URL" => "",
		"DISPLAY_BOTTOM_PAGER" => "N",
		"DISPLAY_DATE" => "N",
		"DISPLAY_NAME" => "N",
		"DISPLAY_PICTURE" => "Y",
		"DISPLAY_PREVIEW_TEXT" => "N",
		"DISPLAY_TOP_PAGER" => "N",
		"FIELD_CODE" => [
			0 => "NAME",
			1 => "PREVIEW_TEXT",
			2 => "PREVIEW_PICTURE",
			3 => "DETAIL_TEXT",
			4 => "",
		],
		"FILTER_NAME" => "",
		"HIDE_LINK_WHEN_NO_DETAIL" => "N",
		"IBLOCK_ID" => "11",
		"IBLOCK_TYPE" => "50",
		"INCLUDE_IBLOCK_INTO_CHAIN" => "N",
		"INCLUDE_SUBSECTIONS" => "N",
		"MESSAGE_404" => "",
		"NEWS_COUNT" => "3",
		"PAGER_BASE_LINK_ENABLE" => "N",
		"PAGER_DESC_NUMBERING" => "N",
		"PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",
		"PAGER_SHOW_ALL" => "N",
		"PAGER_SHOW_ALWAYS" => "N",
		"PAGER_TEMPLATE" => "",
		"PAGER_TITLE" => "Новости",
		"PARENT_SECTION" => "",
		"PARENT_SECTION_CODE" => "",
		"PREVIEW_TRUNCATE_LEN" => "",
		"PROPERTY_CODE" => [
			0 => "link",
			1 => "",
		],
		"SET_BROWSER_TITLE" => "N",
		"SET_LAST_MODIFIED" => "N",
		"SET_META_DESCRIPTION" => "N",
		"SET_META_KEYWORDS" => "N",
		"SET_STATUS_404" => "N",
		"SET_TITLE" => "N",
		"SHOW_404" => "N",
		"SORT_BY1" => "SORT",
		"SORT_BY2" => "",
		"SORT_ORDER1" => "ASC",
		"SORT_ORDER2" => "",
		"STRICT_SECTION_CHECK" => "N"
	],
	false
); ?>

 <!-- О нас -->
<section class="who-area-are pad-90" id="about_us">
    <div class="container">
        <h2 class="title-1"><? // Вставка включаемой области
            $APPLICATION->IncludeComponent(
                    "bitrix:main.include",
                    ".default",
                    array(
                        // region Параметры компонента
                            "AREA_FILE_SHOW"    =>  "page",  // Показывать включаемую область : array ( 'page' => 'для страницы', 'sect' => 'для раздела', )
                            "AREA_FILE_SUFFIX" => "about_title", //Указание суффикса, который будет добавляться к именам файлов включаемых областей.
                        // endregion
                    )
            );  ?></h2>
        <div class="row">
            <div class="col-md-7">
                <div class="who-we">
                    <? // Вставка включаемой области
                    $APPLICATION->IncludeComponent(
                            "bitrix:main.include",
                            ".default",
                            array(
                                // region Параметры компонента
                                    "AREA_FILE_SHOW"    =>  "page",  // Показывать включаемую область : array ( 'page' => 'для страницы', 'sect' => 'для раздела', )
                                    "AREA_FILE_SUFFIX" => "about_text", //Указание суффикса, который будет добавляться к именам файлов включаемых областей.
                                // endregion
                            )
                    );  ?>
                </div>
            </div>
            <div class="col-md-5">
                <div class="about-bg">
                    <? // Вставка включаемой области
                    $APPLICATION->IncludeComponent(
                            "bitrix:main.include",
                            ".default",
                            array(
                                // region Параметры компонента
                                    "AREA_FILE_SHOW"    =>  "page",  // Показывать включаемую область : array ( 'page' => 'для страницы', 'sect' => 'для раздела', )
                                    "AREA_FILE_SUFFIX" => "about_image", //Указание суффикса, который будет добавляться к именам файлов включаемых областей.
                                // endregion
                            )
                    );  ?>
                </div>
            </div>
        </div>
    </div>
</section>

    <!--Основыне активности на главной странице сайта -->
<?$APPLICATION->IncludeComponent(
        "bitrix:news.list",
        "main_activities",
        [
                "ACTIVE_DATE_FORMAT" => "",//
                "ADD_SECTIONS_CHAIN" => "N",//
                "AJAX_MODE" => "N",//
                "AJAX_OPTION_ADDITIONAL" => "",//
                "AJAX_OPTION_HISTORY" => "N",//
                "AJAX_OPTION_JUMP" => "N",//
                "AJAX_OPTION_STYLE" => "N",//
                "CACHE_FILTER" => "N",//
                "CACHE_GROUPS" => "N",//
                "CACHE_TIME" => "36000000",//
                "CACHE_TYPE" => "N",//
                "CHECK_DATES" => "Y",//
                "DETAIL_URL" => "",//
                "DISPLAY_BOTTOM_PAGER" => "N",//
                "DISPLAY_DATE" => "N",//
                "DISPLAY_NAME" => "N",//
                "DISPLAY_PICTURE" => "Y",//
                "DISPLAY_PREVIEW_TEXT" => "N",//
                "DISPLAY_TOP_PAGER" => "N",//
                "FIELD_CODE" => [   //элементы
                        0 => "NAME",
                        1 => "PREVIEW_TEXT",
                        2 => "DETAIL_TEXT",
                ],
                "FILTER_NAME" => "",//
                "HIDE_LINK_WHEN_NO_DETAIL" => "N",//
                "IBLOCK_ID" => "12",//
                "IBLOCK_TYPE" => "50",//
                "INCLUDE_IBLOCK_INTO_CHAIN" => "N",//
                "INCLUDE_SUBSECTIONS" => "N",//
                "MESSAGE_404" => "",//
                "NEWS_COUNT" => "3",// Количество новостей на странице
                "PAGER_BASE_LINK_ENABLE" => "N",// Включить обработку ссылок
                "PAGER_DESC_NUMBERING" => "N",// Использовать обратную навигацию
                "PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",// Время кеширования страниц для обратно навигации
                "PAGER_SHOW_ALL" => "N",// Показвывать ссылку "Все"
                "PAGER_SHOW_ALWAYS" => "N",// Выводить всегда
                "PAGER_TEMPLATE" => "",// Шаблон постарничной навигации
                "PAGER_TITLE" => "Новости",// Название категорий
                "PARENT_SECTION" => "67", // ID раздела
                "PARENT_SECTION_CODE" => "glavnaya-stranitsa", // символьный код раздела
                "PREVIEW_TRUNCATE_LEN" => "",// Максимальная длина анонсов для вывода (только для типа текст)
                "PROPERTY_CODE" => [    //свойства
                ],
                "SET_BROWSER_TITLE" => "N",// Устанавливает заголовок
                "SET_LAST_MODIFIED" => "N",//Устанавливает в заголовках ответа время модификации страницы
                "SET_META_DESCRIPTION" => "N",//Устанавливает описание стараницы
                "SET_META_KEYWORDS" => "N",//Устанавливает ключевые слова страницы
                "SET_STATUS_404" => "N",//Устанавливает статус 404
                "SET_TITLE" => "N",//Устанавливает заголовок страницы
                "SHOW_404" => "N",// Показ специальной страницы
                "SORT_BY1" => "SORT",//
                "SORT_BY2" => "",//
                "SORT_ORDER1" => "ASC",//
                "SORT_ORDER2" => "",//
                "STRICT_SECTION_CHECK" => "N"//
        ],
        false
); ?>


    <!--Инфографика на главной странице сайта -->
<?$APPLICATION->IncludeComponent(
        "bitrix:news.list",
        "infographics",
        [
                "ACTIVE_DATE_FORMAT" => "",//
                "ADD_SECTIONS_CHAIN" => "N",//
                "AJAX_MODE" => "N",//
                "AJAX_OPTION_ADDITIONAL" => "",//
                "AJAX_OPTION_HISTORY" => "N",//
                "AJAX_OPTION_JUMP" => "N",//
                "AJAX_OPTION_STYLE" => "N",//
                "CACHE_FILTER" => "N",//
                "CACHE_GROUPS" => "N",//
                "CACHE_TIME" => "36000000",//
                "CACHE_TYPE" => "N",//
                "CHECK_DATES" => "Y",//
                "DETAIL_URL" => "",//
                "DISPLAY_BOTTOM_PAGER" => "N",//
                "DISPLAY_DATE" => "N",//
                "DISPLAY_NAME" => "N",//
                "DISPLAY_PICTURE" => "Y",//
                "DISPLAY_PREVIEW_TEXT" => "N",//
                "DISPLAY_TOP_PAGER" => "N",//
                "FIELD_CODE" => [   //элементы
                        0 => "NAME", // Название
                        1 => "PREVIEW_TEXT", // Анонс
                        2 => "DETAIL_TEXT", // Подробно (Картинка)
                ],
                "FILTER_NAME" => "",//
                "HIDE_LINK_WHEN_NO_DETAIL" => "N",//
                "IBLOCK_ID" => "13",//
                "IBLOCK_TYPE" => "50",//
                "INCLUDE_IBLOCK_INTO_CHAIN" => "N",//
                "INCLUDE_SUBSECTIONS" => "N",//
                "MESSAGE_404" => "",//
                "NEWS_COUNT" => "4",// Количество новостей на странице
                "PAGER_BASE_LINK_ENABLE" => "N",// Включить обработку ссылок
                "PAGER_DESC_NUMBERING" => "N",// Использовать обратную навигацию
                "PAGER_DESC_NUMBERING_CACHE_TIME" => "36000",// Время кеширования страниц для обратно навигации
                "PAGER_SHOW_ALL" => "N",// Показвывать ссылку "Все"
                "PAGER_SHOW_ALWAYS" => "N",// Выводить всегда
                "PAGER_TEMPLATE" => "",// Шаблон постарничной навигации
                "PAGER_TITLE" => "Новости",// Название категорий
                "PARENT_SECTION" => "", // ID раздела
                "PARENT_SECTION_CODE" => "", // символьный код раздела
                "PREVIEW_TRUNCATE_LEN" => "",// Максимальная длина анонсов для вывода (только для типа текст)
                "PROPERTY_CODE" => [    //свойства
                ],
                "SET_BROWSER_TITLE" => "N",// Устанавливает заголовок
                "SET_LAST_MODIFIED" => "N",//Устанавливает в заголовках ответа время модификации страницы
                "SET_META_DESCRIPTION" => "N",//Устанавливает описание стараницы
                "SET_META_KEYWORDS" => "N",//Устанавливает ключевые слова страницы
                "SET_STATUS_404" => "N",//Устанавливает статус 404
                "SET_TITLE" => "N",//Устанавливает заголовок страницы
                "SHOW_404" => "N",// Показ специальной страницы
                "SORT_BY1" => "SORT",//
                "SORT_BY2" => "",//
                "SORT_ORDER1" => "ASC",//
                "SORT_ORDER2" => "",//
                "STRICT_SECTION_CHECK" => "N"//
        ],
        false
); ?>



<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>