<?php if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();
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
<!--Проверка элементов и что где лежит-->
<?php
//echo "<pre>";
//print_r($arResult);
//echo "</pre>";
//?>

<!-- Проверяем элементы-->
<?php if (!empty($arResult['SECTIONS'])): ?>
    <!-- catalog section list-->
    <div class="col-lg-12">
        <div class="portfolio-menu brand-filter text-center mb-70">
            <div class="filter" data-filter="all">Все</div>
<!--                Перебираем массив-->
            <?php foreach ($arResult['SECTIONS'] as $section): ?>
                <div class="filter" data-filter=".<?= isset($section['CODE']) ? $section['CODE'] : ''; ?>">
                    <?= isset($section['NAME']) ? $section['NAME'] : ''; ?>
                </div>
            <?php endforeach; ?>
        </div>
    </div>
<?php endif; ?>