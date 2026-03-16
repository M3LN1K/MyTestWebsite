<?php
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();
?>

<div class="dadata-search" id="dadata-search-<?=$this->randString()?>">
    <?php if (!empty($arParams['LABEL'])): ?>
        <label for="<?=$arParams['INPUT_ID']?>" class="dadata-label">
            <?=htmlspecialcharsbx($arParams['LABEL'])?>
        </label>
    <?php endif; ?>

    <div class="dadata-input-wrapper">
        <input
                type="text"
                id="<?=$arParams['INPUT_ID']?>"
                class="dadata-input"
                placeholder="<?=htmlspecialcharsbx($arParams['INPUT_PLACEHOLDER'])?>"
                autocomplete="off"
        >
        <div class="dadata-spinner" style="display: none;">Загрузка...</div>
    </div>

    <div class="dadata-results" style="display: none;"></div>
</div>

<script>
    BX.ready(function() {
        new BX.DadataSearch({
            container: 'dadata-search-<?=$this->randString()?>',
            inputId: '<?=$arParams['INPUT_ID']?>',
            apiKey: '<?=$arParams['DADATA_API_KEY']?>',
            componentPath: '<?=$componentPath?>',
            signedParameters: '<?=$this->getComponent()->getSignedParameters()?>'
        });
    });
</script>

