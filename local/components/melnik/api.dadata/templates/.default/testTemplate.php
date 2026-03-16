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
        let token = "17a72269ec5d05d028fdc0d58ae18cbac42524ea";

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
