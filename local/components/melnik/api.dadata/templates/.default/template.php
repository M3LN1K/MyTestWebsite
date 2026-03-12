<?php
if (!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED !== true) die();
// подключаю все системны функции битрикса
require($_SERVER['DOCUMENT_ROOT'] . '/bitrix/modules/main/include/prolog_before.php');



global $USER;
$jsParams = [
    'CONTAINER_CLASS' => 'container',
    'TEMPLATE_NAME' => $arParams['TEMPLATE_NAME'],
    'COMPONENT_NAME' => $arParams['COMPONENT_NAME'],
];
?>
<!-- Верстка страницы сайта -->
<div class="<?= $jsParams['CONTAINER_CLASS'] ?>">
    <label>
        <h2>Введи что-нибудь:</h2>
        <input type="text" class="js-search_input">
    </label>

<!--    Добавил список для вывода результата запроса в DADATA-->
    <div class="search-result">
        <h3>Результаты поиска: </h3>
        <div class="js-search-list"></div>
    </div>

    <!-- Список компаний из инфоблока -->
    <div class="companies__list">
        <!-- Добавим блок для отображения компаний из инфоблока -->
        <div class="iblock-companies__list">
            <h3>Компании в инфоблоке:</h3>
            <div class="iblock-items-container">
                <?php forEach($arResult['ITEMS'] as $item) {
                    ?>
                    <!--Вывод элементов инфоблока с кнопками дулаения и доп инфой-->
                    <div class="company-item" data-id="<?= $item['ID'] ?>" data-inn="<?= $item["PROPERTY_INN_VALUE"] ?>">
                        <p class="company-name">Наименование: <?= $item['NAME'] ?></p>
                        <p class="inn">ИНН: <?= $item["PROPERTY_INN_VALUE"] ?></p>
                        <div class="company-detail">
                            <p class="ogrn">ОГРН: <?= $item["PROPERTY_OGRN_VALUE"] ?></p>
                            <p class="address">АДРЕС: <?= $item["PROPERTY_ADDRESS_VALUE"] ?></p>
                        </div>
                        <div class="company-actions">
                            <button class="btn btn-info">Доп информация</button>
                            <button class="btn btn-delete">Удалить из инфоблока</button>
                        </div>
                    </div>
                <?php } ?>
            </div>
        </div>
    </div>
</div>

<!--Шаблоны-->
<div class="js-companies-by-inn-templates-container">
        <!--Шаблон компании-->
        <div class="company-item">
            <p class="company-name"></p>
            <p class="inn"></p>
            <div class="company-detail">
                <p class="ogrn"></p>
                <p class="address"></p>
            </div>
            <div class="company-actions">
                <button class="btn btn-info">Доп информация</button>
                <button class="btn btn-add">Добавить в инфоблок</button>
                <button class="btn btn-delete">Удалить в инфоблок</button>
            </div>
        </div>
</div>

<script>
    // Для шаблона при поиске
    let input = document.querySelector(".js-search_input"); // В общем пространстве ищу класс .js-search_input для создания обработчика

    // Для шаблона при выводе результата поиска
    let templatesContainer = document.querySelector('.js-companies-by-inn-templates-container'); // В общем пространстве ищу класс .js-companies-by-inn-templates-container для работы с его внутренними элементами
    let companyItemTemplate = templatesContainer.querySelector('.company-item'); // В пространстве .js-search-list ищу класс .company-item для занесения данных в верстку
    let searchListContainer = document.querySelector('.search-result .js-search-list') // В пространстве .js-companies-by-inn-templates-container ищу класс .js-search-list для занесения данных в верстку



    input.addEventListener("input", searchInputHandler);
    // ОБРАБОТЧИК ПОЛЯ ВВОДА
    function searchInputHandler(e) {
        let input = e.currentTarget;
        let inputValue = input.value;
        // Проверка на минимальную длину запроса
        if (inputValue.length < 3) {
            searchListContainer.innerHTML = ''; // Очищает контеинер
            return;
        }
        // ПОЛУЧЕНИЕ
        getDataByInn(inputValue)
            .then(res => onGetDataByInnSuccess(res));
    }

    function addBtnHandler(e){
        e.preventDefault();//без перезагрузки страницы


        BX.ajax({
            url: '/local/components/melnik/api.dadata/templates/.default/ajax/save_company.php',
            method: 'POST',
            data: {
                iblock_id: 15,
                name: res.name,
                inn: res.inn,
                ogrn: res.ogrn,
                address: res.address
            },
            onsuccess: addSuccessHandler,
            onfailure:onBtnFailureHandler
        });
    }
        function onGetDataByInnSuccess(res) {
            const data = JSON.parse(res);
            // Делаем условие при котором не будут найдены элементы запроса в DADATA
            if (!data.suggestions || data.suggestions.length === 0) {
                searchListContainer.innerHTML = '<p>Ничего не найдено</p>';
            }
            data.suggestions.forEach(item => {
                let companyElement = prepareCompanyItemTemplate(item);
                // Добавление в контеинер
                searchListContainer.appendChild(companyElement);
            });
        }




    function prepareCompanyItemTemplate(item){
        // Запись в переменные значений массива
        console.log("prepareCompanyItemTemplate")
        const name = item.value;
        const inn = item.data.inn;
        const ogrn = item.data.ogrn;
        const address = item.data.address?.value;



        const companyElement = companyItemTemplate.cloneNode(true)
        // Запись элементов
        companyElement.querySelector('.company-name').textContent = 'Название : ' + name;
        companyElement.querySelector('.inn').textContent = 'ИНН : ' + inn;
        companyElement.querySelector('.ogrn').textContent = 'ОГРН : ' + ogrn;
        companyElement.querySelector('.address').textContent = 'Адрес : ' + address;
        // Назначение кнопок в переменные
        const infoBtn = companyElement.querySelector('.btn-info');
        const addBtn = companyElement.querySelector('.btn-add');
        const deleteBtn = companyElement.querySelector('.btn-delete');

        // Показать
        let elements = document.querySelectorAll(".company-actions")
            if (infoBtn !== null){
                infoBtn.addEventListener('click', infoBtnHandler);
            }
            if (addBtn !== null){
                addBtn.addEventListener('click', addBtnHandler);
            }
            if (deleteBtn !== null){
                // Удаление из инфоблока по кнопке
                deleteBtn.addEventListener('click', deleteBtnHandler);
            }

        return companyElement;

    }
    //
    function deleteBtnHandler(e){
        e.preventDefault();
        // Получаем элемент, на который нажали
        let btn = e.currentTarget;
        let itemWrapper = btn.closest('.company-item');
        // Получаем ИНН из этого конкретного элемента
        let companyInnElement = itemWrapper.querySelector('.inn');
        // Извлекаем только цифры ИНН (если там текст "ИНН : 1234567890")
        let companyInn = companyInnElement.textContent.replace('ИНН : ', '').trim();
        BX.ajax({
            url: '/local/components/melnik/api.dadata/templates/.default/ajax/delete_company.php',
            method: 'POST',
            data: {
                iblock_id: 15,
                INN: companyInn
            },
            onsuccess: deleteSuccessHandler,
            onfailure:onBtnFailureHandler
        });
    }

    function addSuccessHandler(response){
        let res = JSON.parse(response)
        console.log(res)
        if (res.success) {
            alert(res.message);
        } else{
            alert(res.error);
        }
    }

    function deleteSuccessHandler(itemWrapper, response) {
        let res = JSON.parse(response);
        if (res.success) {
            alert(res.message);
            itemWrapper.remove(); // удаляем элемент из DOM
        } else {
            alert('Ошибка: ' + (res.error || 'Неизвестная ошибка'));
        }
    }

    function onBtnFailureHandler(){
        alert('Ошибка при добавлении компании')
    }

    function infoBtnHandler(e){
        e.preventDefault(); //без перезагрузки страницы
        let btn = e.currentTarget;
        let itemWrapper = btn.closest('.company-item')
        let itemDetailInfo = itemWrapper.querySelector('.company-detail')
        itemDetailInfo.classList.toggle('active')
        console.log('infoBtnHandler')
    }


    //  функция, которая делает запрос
    async function getDataByInn(value){
        let token = "184f3fc305f5e7790c8708bd879e58877174078b";

        let url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party";
        let requestData = {query: value, count: 3};

        let options = {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Token " + token
            },
            body: JSON.stringify(requestData)
        };

        // посылает запрос
        return fetch(url, options)
            .then(response => response.text()) // получает в виде текста
            .then((res) =>{
                return res
            })
            .catch(error => console.log("error", error));
    }
</script>

