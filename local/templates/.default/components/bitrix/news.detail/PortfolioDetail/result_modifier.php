<?php




if (!empty($arResult['PROPERTIES']['gallery']['VALUE'])){
    foreach ($arResult['PROPERTIES']['gallery']['VALUE'] as $key => $photoId){
        $arPhoto = CFile::GetFileArray($photoId);

//        echo "<pre>";
//        print_r($arPhoto);
//        print_r($arResult);
//        echo "</pre>";

        $arResult['PROPERTIES']['gallery'][$key]['SRC'] = $arPhoto['SRC'];
    }
}