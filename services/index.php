<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Услуги");
$APPLICATION->SetPageProperty("TITLE", "Услуги | We project");
?>
    <section class="who-area-are bg-color pad-90">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-md-6">
                    <div class="who-we">
                        <h2 class="title-1"><?$APPLICATION->IncludeComponent(
                                "bitrix:main.include",
                                "",
                                Array(
                                    "AREA_FILE_SHOW" => "page",
                                    "AREA_FILE_SUFFIX" => "srv_title",
                                )
                            );?></h2>
                        <?$APPLICATION->IncludeComponent(
                            "bitrix:main.include",
                            "",
                            Array(
                                "AREA_FILE_SHOW" => "page",
                                "AREA_FILE_SUFFIX" => "srv_text",
                            )
                        );?>
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div class="our-skill">
                        <h2 class="title-1"><?$APPLICATION->IncludeComponent(
                                "bitrix:main.include",
                                "",
                                Array(
                                    "AREA_FILE_SHOW" => "page",
                                    "AREA_FILE_SUFFIX" => "srv_skills",
                                )
                            );?></h2>
                        <div class="progress-list">
                            <div class="progress">
                                <div class="lead"><?$APPLICATION->IncludeComponent(
                                            "bitrix:main.include",
                                            "",
                                            Array(
                                                    "AREA_FILE_SHOW" => "page",
                                                    "AREA_FILE_SUFFIX" => "srv_lead",
                                            )
                                    );?></div>
                                <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 90%;">
                                    <span>90%</span>
                                </div>
                            </div>
                            <div class="progress">
                                <div class="lead"><?$APPLICATION->IncludeComponent(
                                            "bitrix:main.include",
                                            "",
                                            Array(
                                                    "AREA_FILE_SHOW" => "page",
                                                    "AREA_FILE_SUFFIX" => "srv_php",
                                            )
                                    );?></div>
                                <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 80%;">
                                    <span>80%</span>
                                </div>
                            </div>
                            <div class="progress">
                                <div class="lead"><?$APPLICATION->IncludeComponent(
                                            "bitrix:main.include",
                                            "",
                                            Array(
                                                    "AREA_FILE_SHOW" => "page",
                                                    "AREA_FILE_SUFFIX" => "srv_nodejs",
                                            )
                                    );?></div>
                                <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                                     aria-valuemax="100" style="width: 75%;">
                                    <span>75%</span>
                                </div>
                            </div>
                            <div class="progress">
                                <div class="lead"><?$APPLICATION->IncludeComponent(
                                            "bitrix:main.include",
                                            "",
                                            Array(
                                                    "AREA_FILE_SHOW" => "page",
                                                    "AREA_FILE_SUFFIX" => "srv_js",
                                            )
                                    );?></div>
                                <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 75%;">
                                    <span>75%</span>
                                </div>
                            </div>
                            <div class="progress">
                                <div class="lead"><?$APPLICATION->IncludeComponent(
                                            "bitrix:main.include",
                                            "",
                                            Array(
                                                    "AREA_FILE_SHOW" => "page",
                                                    "AREA_FILE_SUFFIX" => "srv_css",
                                            )
                                    );?></div>
                                <div class="progress-bar" role="progressbar" aria-valuenow="80" aria-valuemin="0"
                                     aria-valuemax="100" style="width: 80%;">
                                    <span>80%</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Активности -->
<?$APPLICATION->IncludeComponent(
        "bitrix:news.list",
        "service_activities",
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
                "NEWS_COUNT" => "6",// Количество новостей на странице
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



<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>