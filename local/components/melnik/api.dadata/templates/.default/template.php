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
        <p>  </p>
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
                        <button class="btn btn-catalog">
                            Каталог
                            <span>
                                123
                            </span>
                        </button>
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
<!--                <button class="btn btn-delete">Удалить в инфоблок</button>-->
            </div>
        </div>
</div>

<script>
    let input = document.querySelector(".js-search_input");

    let companyTemplate = document.querySelector(".js-companies-by-inn-templates-container");
    let companyItemTemplate = companyTemplate.querySelector(".company-item");
    let companyBtnTemplate = companyItemTemplate.querySelector(".company-actions")
    let searchListContainer = document.querySelector(".js-search-list");


    let catalogButtons = document.querySelectorAll(".btn-catalog");
    let dopInfoButtons = document.querySelectorAll(".btn-info");
    let addCompanyButtons = document.querySelectorAll(".btn-add");
    let deleteCompanyButtons = document.querySelectorAll(".btn-delete");

    input.addEventListener("input", searchInputHandler) // Вешаем слушатель но поле ввода

    // Обработчик ввода
    function searchInputHandler(e){
        e.preventDefault();
        let input = e.currentTarget;// Указывает на элемент, к которому был прикреплён обработчик события
        let inputValue = input.value; // присваиваем переменной значения которые ввели в input
        console.log(inputValue) // Выводим в консоль

        getDataByInn(inputValue)// вызываем функцию и говорим ей что данные будет приходить для запроса от юзера
            .then(res => onGetDataByInnSuccess(res))// обработка результата ответа функции getDataByInn
    }
    function onGetDataByInnSuccess(res){
        let data = JSON.parse(res);
        console.log(data)
        //     Делаем проверку на совпадения
        if(data.suggestions || data.suggestions.length === 0){
            searchListContainer.innerHTML = "<p> Ничего не найдено </p>"
        }
        data.suggestions.forEach(item => {
            let companyElement = prepareCompanyItemTemplate(item);
            searchListContainer.appendChild(companyElement)
        })
    }


    function prepareCompanyItemTemplate(item){
        // Объявил переменные
        let name, inn, ogrn, address,companyElement, addBtn, infoBtn;
        // Присвоил им значения
        name = item.value;
        inn = item.data.inn;
        ogrn = item.data.ogrn;
        address = item.data.address?.value;

        companyElement = companyItemTemplate.cloneNode(true);// Тут копируем шаблон элементов
        // Выбираю куда надо добавить данные из запроса и какую инофрмацию вывести на экран
        companyElement.querySelector('.company-name').textContent = "Название компании: " + name;
        companyElement.querySelector('.inn').textContent = "ИНН: " + inn;
        companyElement.querySelector('.ogrn').textContent = "ОГРН: " + ogrn;
        companyElement.querySelector('.address').textContent = "Адрес: " + address;

        infoBtn = companyElement.querySelector(".btn-info");

        if (infoBtn !== null){
             infoBtn.addEventListener("click", dopInfoBtnHandler);
        }




        console.log(companyElement)

        // Объявляю кнопки в шаблоне поиска
        return companyElement;

    }





    catalogButtons.forEach((item) => {
        item.addEventListener("click", catalogBtnHandler);
    })
    dopInfoButtons.forEach((item) => {
        item.addEventListener("click", dopInfoBtnHandler);
    })
    deleteCompanyButtons.forEach((item) => {
        item.addEventListener("click", deleleBtnHandler)
    })


    function deleleBtnHandler(e){
        e.preventDefault();
        let deleteItem = e.currentTarget;
        let itemWrapper = deleteItem.closest(".company-item");
        let selectItemInn = itemWrapper.querySelector(".inn");
        let companyInn = selectItemInn.textContent.replace("ИНН : ", "").trim();
        BX.ajax({
            url : "/local/components/melnik/api.dadata/templates/.default/ajax/delete_company.php",
            method: "POST",
            data: {iblock_id: 15, INN: companyInn},
            success: function (res){
                itemWrapper.remove();
            },
            failure: function (error){
                console.log("Ошибка", error);
            }
        })

        console.log('Кнопка активна!!!')
    }

    function dopInfoBtnHandler(e){
        e.preventDefault();
        let dopInfoBtn = e.currentTarget;
        let itemWrapper = dopInfoBtn.closest(".company-item"); // closets() -> ищет родительский элемент по CSS-селектору
        let itemDetailInfo = itemWrapper.querySelector(".company-detail"); // Выбираю дочерний CSS-селектор для вывода до информации
        itemDetailInfo.classList.toggle("active"); // classList -> позволяет работать с классами элемента, а toggle -> добавляет класс если его нет, удаляет если есть
        console.log("Кнопка нажата")

    }

    function catalogBtnHandler(e){
        let curentTarget = e.currentTarget
        let buttonSpan = curentTarget.querySelector('span')
        buttonSpan.textContent = "321"
        e.preventDefault()
        console.log(e)
    }


    async function getDataByInn(values){
        let token = "17a72269ec5d05d028fdc0d58ae18cbac42524ea";

        let url = "https://suggestions.dadata.ru/suggestions/api/4_1/rs/suggest/party";
        let requestData = {query: values, count: 3};

        let options = {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json",
                "Authorization": "Token " + token
            },
            body: JSON.stringify(requestData)
        }

        return fetch(url, options)
            .then(response => response.text())
            .then((res) => {return res})
            .catch(error => console.log("error", error));
    }

</script>






