<!-- Запрет на открытие напрямую-->
<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die(); ?>

<!--    проверка элементов-->
    <?php if (!empty ($arResult ['ITEMS'])):?>
        <section class="service-area pt-90 pb-60 bg-color">
            <div class="container">
                <div class="row">
<!--                    Не редактируемая часть-->
                    <div class="section-heading text-center mb-70">
                        <h2>Основные направления</h2>
                        <p>Всё что нужно для производства сайта любой сложности</p>
                    </div>
                </div>
                <div class="row">
<!--                    вывод элементов в компоненте-->
                    <?php  foreach ($arResult ['ITEMS'] as $arItem): ?>
                        <div class="col-lg-4 col-md-4 col-sm-6">
                            <div class="single-service brand-hover radius-4 mb-30 text-center">
                                <div class="service-icon">
<!--                                    вывод детального тектса-->
                                    <h2><?= isset ($arItem ['DETAIL_TEXT']) ? $arItem['DETAIL_TEXT'] : ' ' ;?>
                                </div>
                                <div class="service-text">
<!--                                    выводим имя элемента и текст для отображения иконки-->
                                    <h3><?= isset ($arItem ['NAME']) ? $arItem['NAME'] : ' '; ?></h3>
                                    <p><?= isset ($arItem ['PREVIEW_TEXT']) ? $arItem['PREVIEW_TEXT'] : ' ' ;?></p>
                                </div>
                            </div>
                        </div>
                    <?php endforeach;?>
                </div>
            </div>
        </section>
     <?php endif;?>
