<?php


use Bitrix\Main\Engine\ActionFilter\Csrf;
use Bitrix\Main\Engine\ActionFilter\HttpMethod;
use Bitrix\Main\Engine\Contract\Controllerable;
use Bitrix\Main\Entity\ReferenceField;
use Bitrix\Main\Errorable;
use Bitrix\Main\ErrorCollection;
use Bitrix\Main\Loader;
use Bitrix\Main\LoaderException;
use Bitrix\Main\Localization\Loc;
use Bitrix\Main\Type\DateTime;
use Bitrix\Main\Error;

if (!defined('B_PROLOG_INCLUDED') || B_PROLOG_INCLUDED !== true) {
    die();
}

class CustomComponentTmpComponent extends CBitrixComponent implements Controllerable
{
    protected array $cacheAddon = [];
    protected null|string $userId = '';
    protected array $user = [];


    protected ErrorCollection $errorCollection;


    public function executeComponent()
    {
        try {
            $this->errorCollection = new ErrorCollection();
            if (!$this->prepareParams()) {
                /** @var Error $item */
                foreach ($this->errorCollection as $item) {
                    $this->__showError($item->getMessage());
                }
            }
            if (!$this->readDataFromCache()) {
                $this->setResult();
                $this->endResultCache();
            }
            foreach ($this->errorCollection as $error) {
                $this->__showError($error->getMessage());
                return;
            }
            $this->includeComponentTemplate();
        } catch (Exception $e) {
            $this->clearResultCache($this->cacheAddon);
            $this->__showError($e->getMessage());
        }
    }

    /**
     * @throws LoaderException
     */
    protected function checkModules(): void
    {
        if (!\Bitrix\Main\Loader::includeModule('iblock')){
            echo ' Модуль не подключен';
        }
    }

    protected function prepareParams(): bool
    {


        return true;
    }

    protected function readDataFromCache(): bool
    {
         return false;
        if ($this->arParams['CACHE_TYPE'] === 'N' || $this->request->isAjaxRequest()) {
            return false;
        }
        $this->cacheAddon = [
            $this->arParams,
            $this->getSiteId()
        ];
        return !$this->StartResultCache($this->arParams['CACHE_TIME'], $this->cacheAddon);
    }


    protected function setResult(): void
    {
        $this->templateName = $this->GetTemplateName();
        if (empty($this->templateName)) $this->templateName = '.default';
        $this->componentName = $this->getName();
        $this->componentPath = $this->getPath();

        $my_elements = CIBlockElement::GetList(
            ["ID" => "ASC", "NAME" => "ASC"], //Сортировка по возрастанию
            ["IBLOCK_ID" => 15, "ACTIVE" => "Y"], //Фильтр по ID инфоблока
            false, // Группировка
            false,
            array(
                'ID',
                'NAME',
                "PROPERTY_INN",
                "PROPERTY_OGRN",
                "PROPERTY_ADDRESS"
            )

        );
        while($ar_fields = $my_elements->fetch())
        {
            $this->arResult['ITEMS'][] = $ar_fields;
        }





        $this->arParams['TEMPLATE_NAME']  = $this->templateName;
        $this->arParams['COMPONENT_NAME'] = $this->componentName;
    }

    public function configureActions(): array
    {
        return [
            'getComponent' => [
                'prefilters' => [
                    new HttpMethod([HttpMethod::METHOD_POST]),
                    new Csrf()
                ]
            ],
        ];
    }

    public function getComponentAction($data)
    {
        $this->errorCollection = new ErrorCollection();
        try {
            $this->checkModules();
        } catch (Exception $e) {
            $this->errorCollection->setError(new Error(Loc::getMessage('RELOAD_ACTION_EXCEPTION')));
            $this->errorCollection->setError(
                new Error($e->getMessage(), 0, ['trace' => $e->getTraceAsString()])
            );
            return null;
        }
        $params = array_merge($this->arParams, $data);
        return new Bitrix\Main\Engine\Response\Component(
            $data['COMPONENT_NAME'], $data['TEMPLATE_NAME'],
            $params
        );
    }

    public function onPrepareComponentParams($arParams): array
    {
        $this->checkModules();
        $this->errorCollection = new ErrorCollection();
        return $arParams;
    }

    protected function listKeysSignedParameters(): array
    {
        return [
        ];
    }
}
