<?php
if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();

use Bitrix\Main\Loader;
use Bitrix\Main\Context;
use Bitrix\Main\Web\Json;

class DadataAddressComponent extends CBitrixComponent
{
    /**
     * Подготовка параметров компонента
     */
    public function onPrepareComponentParams($arParams)
    {
        // Значение по умолчанию для ID инпута
        if (!isset($arParams['INPUT_ID']) || empty($arParams['INPUT_ID'])) {
            $arParams['INPUT_ID'] = 'dadata_address_' . randString(5);
        }

        // Значение по умолчанию для лейбла
        if (!isset($arParams['LABEL']) || empty($arParams['LABEL'])) {
            $arParams['LABEL'] = 'Введите адрес:';
        }

        // API ключ DaData (обязательный параметр)
        if (empty($arParams['DADATA_API_KEY'])) {
            $arParams['DADATA_API_KEY'] = ''; // Можно задать значение по умолчанию
        }

        return $arParams;
    }

    /**
     * Выполнение компонента
     */
    public function executeComponent()
    {
        global $APPLICATION;

        // Обработка AJAX запроса
        if ($this->request->isPost() && $this->request->getPost('ajax') == 'y') {
            $this->handleAjaxRequest();
            return;
        }

        $this->includeComponentTemplate();
    }

    /**
     * Обработка AJAX запросов
     */
    private function handleAjaxRequest()
    {
        global $APPLICATION;

        $query = $this->request->getPost('query');
        $action = $this->request->getPost('action');

        $result = ['success' => false, 'data' => [], 'error' => ''];

        if ($action == 'searchAddress' && !empty($query)) {
            $addresses = $this->searchAddress($query);
            $result['success'] = true;
            $result['data'] = $addresses;
        } else {
            $result['error'] = 'Не указан поисковый запрос';
        }

        // Отправляем JSON ответ
        $APPLICATION->RestartBuffer();
        echo Json::encode($result);
        die();
    }

    /**
     * Поиск адресов через DaData
     */
    private function searchAddress($query)
    {
        if (empty($this->arParams['DADATA_API_KEY'])) {
            return [];
        }

        $ch = curl_init('https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/address');
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_HTTPHEADER, [
            'Content-Type: application/json',
            'Accept: application/json',
            'Authorization: Token ' . $this->arParams['DADATA_API_KEY']
        ]);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, Json::encode([
            'query' => $query,
            'count' => 10 // количество результатов
        ]));

        $result = curl_exec($ch);
        $httpCode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
        curl_close($ch);

        if ($httpCode != 200) {
            return [];
        }

        $data = Json::decode($result);
        return $this->formatAddresses($data);
    }

    /**
     * Форматирование адресов для вывода
     */
    private function formatAddresses($data)
    {
        $addresses = [];

        if (!empty($data['suggestions'])) {
            foreach ($data['suggestions'] as $suggestion) {
                $addresses[] = [
                    'value' => $suggestion['value'],
                    'data' => $suggestion['data']
                ];
            }
        }

        return $addresses;
    }
}