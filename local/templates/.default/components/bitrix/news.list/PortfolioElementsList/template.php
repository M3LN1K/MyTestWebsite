<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
/** @var array $arParams */
/** @var array $arResult */
/** @global CMain $APPLICATION */
/** @global CUser $USER */
/** @global CDatabase $DB */
/** @var CBitrixComponentTemplate $this */
/** @var string $templateName */
/** @var string $templateFile */
/** @var string $templateFolder */
/** @var string $componentPath */
/** @var CBitrixComponent $component */
$this->setFrameMode(true);
?>
<!--проверка элементов-->
<?php if (!empty($arResult['ITEMS'])): ?>
    <div id="Container">
<!--перебор элементов-->
        <?php foreach ($arResult['ITEMS'] as $arItem): ?>
            <!-- Были классы влияющие за фильтариции списков "landing promo",
                 используется теперь "SECTION_CODES" для фильтрации,
                 подгружается из файла "result_modifier.php" -->
            <div class="col-md-4 col-sm-6 col-xs-12 mb-30 mix <?= isset($arItem['SECTIONS_CODES'])? $arItem['SECTIONS_CODES']: ''; ?>">
                <div class="portfolio-wrapper portfolio-title">
                    <div class="portfolio-img">
                                <!-- проверка картинки-->
                        <?php if ($arItem['PREVIEW_PICTURE']['SRC']): ?>
                                <!-- Ссылка на картинку-->
                            <img src="<?= $arItem['PREVIEW_PICTURE']['SRC']; ?>"
                                 alt="<?= $arItem['PREVIEW_PICTURE']['ALT']; ?>"/>

                            <div class="work-text brand-bg">
                                <div class="inner-text">
                                    <a class="view-portfolio image-link" href="<?= $arItem['PREVIEW_PICTURE']['SRC'] ?>">
                                        <span class="plus"></span>
                                    </a>
                                </div>
                            </div>
                        <?php endif; ?>
                    </div>
                    <div class="portfolio-heading pd-15">
                        <h4 class="mb-10">
                                <!--Ссылка на детальную страницу элемента, если это настроенно-->
                            <a href="<?= $arItem['DETAIL_PAGE_URL'] ?>">
                                <?= isset($arItem['NAME'])? $arItem['NAME']: ''; ?>
                            </a>
                        </h4>
                            <!-- из файла "result_modifier.php" подгружаем "SECTION_NAME" ->
                                 название основного раздела-->
                        <h5 class="m-0"><?= isset($arItem['SECTION_NAME'])? $arItem['SECTION_NAME']: ''; ?></h5>
                    </div>
                </div>
            </div>
        <?php endforeach; ?>
    </div>
<?php endif; ?>