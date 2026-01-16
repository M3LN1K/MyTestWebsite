<?if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true)die();?>

<? ?>



<?php if (!empty($arResult)):?>
<div class="header-main-menu hidden-xs">
    <nav id="primary-menu">
        <ul class="main-menu text-right">
            <?php foreach ($arResult as $item):?>

           <?php if ($item["SELECTED"]):?>
                <li>
                    <a href="<?= $item ['LINK'] ?>" style="color: #A558A6"><?= $item ['TEXT'] ?></a>
                </li>
            <?php  else:  ?>
                <li>
                    <a href="<?= $item ['LINK'] ?>"><?= $item ['TEXT'] ?></a>
                </li>
            <?php endif; ?>

            <?php endforeach;?>
        </ul>
    </nav>
</div>
<?php endif; ?>



<?php
//echo '<pre>';
//print_r($arResult);
//echo '</pre>';
// ?>