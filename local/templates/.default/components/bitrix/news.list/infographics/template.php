<!-- Запрет на открытие напрямую-->
<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die(); ?>

<?php if (!empty($arResult['ITEMS'])): ?>
    <!-- Инфографика -->
    <section class="project-count-area brand-bg pad-90">
        <div class="container">
            <div class="row">
                <?php foreach ($arResult['ITEMS'] as $arItem): ?>
                    <div class="col-md-3 col-sm-3">
                        <div class="single-count white-text text-center">
                            <!--выводим текст для отображения иконки-->
                            <?= $arItem['DETAIL_TEXT'] ?? " "; ?>
                            <!--вывод текста анонса-->
                            <h2 class="counter"><?= $arItem['PREVIEW_TEXT'] ?? " "; ?></h2>
                            <!--выводим имя элемента-->
                            <p><?= $arItem['NAME'] ?? " "; ?></p>
                        </div>
                    </div>
                <?php endforeach; ?>
            </div>
        </div>
    </section>
<?php endif; ?>
