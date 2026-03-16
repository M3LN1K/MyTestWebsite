<!-- Запрет на открытие напрямую-->
<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die(); ?>


<!-- Направления -->
<?php if (!empty($arResult ['ITEMS'])): ?>
<section class="service-area pt-90 pb-60">
    <div class="container">
        <div class="row">

            <div class="section-heading text-center mb-70">
                <h2>Направления</h2>
                <p>Всё что нужно для производства сайта любой сложности</p>
            </div>
        </div>
        <div class="row">
            <?php foreach($arResult['ITEMS'] as $arItem): ?>
            <div class="col-lg-4 col-md-4 col-sm-6">
                <div class="single-service brand-hover radius-4 mb-30 text-center">
                    <div class="service-icon">
                        <h2><?= isset($arItem['DETAIL_TEXT']) ? $arItem['DETAIL_TEXT'] : ' '; ?></h2>
                    </div>
                    <div class="service-text">
                        <h3><?= isset($arItem['NAME']) ? $arItem['NAME'] : ' '; ?></h3>
                        <p><?= isset($arItem['PREVIEW_TEXT']) ? $arItem['PREVIEW_TEXT'] : ' ';?></p>
                    </div>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>
<?php endif; ?>
