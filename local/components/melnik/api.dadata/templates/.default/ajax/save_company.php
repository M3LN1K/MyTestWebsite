<?php
// Файл обработки данных из DADATA. обработчик запросов от JavaScript.
require_once($_SERVER['DOCUMENT_ROOT'] . '/bitrix/modules/main/include/prolog_before.php');
header("Content-Type: application/json");

try {
    // Проверка подключенли инфоблок
    if(!\Bitrix\Main\Loader::includeModule('iblock')) {
        header("Content-Type: application/json");
        echo json_encode([
            "success" => false,
            "message" => "Модуль инфоблока не найден"
        ]);
        die;
    }

    // мои данные из JS
    $iblockId = (int)($_POST['iblock_id'] ?? 0);
    $name = trim($_POST['name'] ?? '');
    $inn = trim($_POST['inn'] ?? '');
    $ogrn = trim($_POST['ogrn'] ?? '');
    $address = trim($_POST['address'] ?? '');

    $arFields = [
        'IBLOCK_ID' => $iblockId,
        'PROPERTY_INN' => $inn,
    ];

    $rsElements = CIBlockElement::GetList([], $arFields, false,['ID', 'NAME']);

    if ($arElement = $rsElements->Fetch()){
        $log = date('Y-m-d H:i:s') . ' ' . print_r($arElement, true);
        file_put_contents($_SERVER['DOCUMENT_ROOT'] . '/a1_$arElement.txt', $log . PHP_EOL, FILE_APPEND);

        echo json_encode(['success' => false, 'error' => 'Элемент уже существует']);
        die();
    }

    // создаем новый элемент инфоблока
    $el = new CIBlockElement;
    // метод добавления новых элементов в инфоблок
    $arFields = [
        "IBLOCK_ID" => $iblockId,
        "ACTIVE" => "Y",
        "NAME" => $name,
        "PROPERTY_VALUES" => [
            "INN" => $inn,
            "OGRN" => $ogrn,
            "ADDRESS" => $address,
        ]
    ];

    // Логируем что пытаемся добавить
    file_put_contents($_SERVER['DOCUMENT_ROOT'] . '/local/debug.log',
        date('Y-m-d H:i:s') . ' - Попытка добавить: ' . print_r($arFields, true) . "\n",
        FILE_APPEND);

    $elementId = $el->Add($arFields);

    if ($elementId) {
        echo json_encode(['success' => true, 'element_id' => $elementId,'message' => 'Добавлена']);
    } else {
        // Логируем ошибку
        file_put_contents($_SERVER['DOCUMENT_ROOT'] . '/local/debug.log',
            date('Y-m-d H:i:s') . ' - Ошибка: ' . $el->LAST_ERROR . "\n",
            FILE_APPEND);

        echo json_encode(['success' => false, 'error' => $el->LAST_ERROR ?: 'LAST_ERROR пустой']);
    }

} catch (Exception $e) {
    file_put_contents($_SERVER['DOCUMENT_ROOT'] . '/local/debug.log',
        date('Y-m-d H:i:s') . ' - Исключение: ' . $e->getMessage() . "\n",
        FILE_APPEND);

    echo json_encode(['success' => false, 'error' => $e->getMessage()]);
}




