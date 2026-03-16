BX.namespace('BX.DadataSearch');

(function() {

    BX.DadataSearch = function(options) {
        this.container = BX(options.container);
        this.input = BX(options.inputId);
        this.apiKey = options.apiKey;
        this.componentPath = options.componentPath;
        this.signedParameters = options.signedParameters;

        this.resultsContainer = this.container.querySelector('.dadata-results');
        this.spinner = this.container.querySelector('.dadata-spinner');

        this.searchTimeout = null;
        this.minQueryLength = 3;

        this.init();
    };

    BX.DadataSearch.prototype.init = function() {
        if (!this.input) return;

        // Обработчик ввода текста
        BX.bind(this.input, 'input', this.onInput.bind(this));

        // Обработчик клавиш (для навигации по результатам)
        BX.bind(this.input, 'keydown', this.onKeyDown.bind(this));

        // Закрытие результатов при клике вне
        BX.bind(document, 'click', this.onDocumentClick.bind(this));
    };

    BX.DadataSearch.prototype.onInput = function() {
        var query = this.input.value.trim();

        // Очищаем предыдущий таймаут
        if (this.searchTimeout) {
            clearTimeout(this.searchTimeout);
        }

        // Если запрос слишком короткий - скрываем результаты
        if (query.length < this.minQueryLength) {
            this.hideResults();
            return;
        }

        // Показываем спиннер
        this.showSpinner();

        // Устанавливаем таймаут для поиска (debounce)
        this.searchTimeout = setTimeout(function() {
            this.searchAddress(query);
        }.bind(this), 300);
    };

    BX.DadataSearch.prototype.searchAddress = function(query) {
        // AJAX запрос к компоненту
        BX.ajax({
            url: this.componentPath + '/ajax.php',
            method: 'POST',
            data: {
                ajax: 'y',
                action: 'searchAddress',
                query: query,
                sessid: BX.bitrix_sessid(),
                signedParameters: this.signedParameters
            },
            onsuccess: function(response) {
                this.hideSpinner();

                try {
                    var data = JSON.parse(response);
                    if (data.success && data.data.length > 0) {
                        this.showResults(data.data);
                    } else {
                        this.showNoResults();
                    }
                } catch (e) {
                    console.error('Ошибка обработки ответа:', e);
                    this.showNoResults();
                }
            }.bind(this),
            onfailure: function() {
                this.hideSpinner();
                this.showNoResults();
                console.error('Ошибка AJAX запроса');
            }.bind(this)
        });
    };

    BX.DadataSearch.prototype.showResults = function(addresses) {
        if (!this.resultsContainer) return;

        var html = '';
        for (var i = 0; i < addresses.length; i++) {
            html += '<div class="dadata-result-item" data-index="' + i + '">' +
                '<div class="address-text">' + BX.util.htmlspecialchars(addresses[i].value) + '</div>' +
                '</div>';
        }

        this.resultsContainer.innerHTML = html;
        this.resultsContainer.style.display = 'block';

        // Добавляем обработчики клика на результаты
        var items = this.resultsContainer.querySelectorAll('.dadata-result-item');
        for (var j = 0; j < items.length; j++) {
            BX.bind(items[j], 'click', this.onResultClick.bind(this));
            BX.bind(items[j], 'mouseover', this.onResultHover.bind(this));
        }

        this.currentResults = addresses;
        this.selectedIndex = -1;
    };

    BX.DadataSearch.prototype.showNoResults = function() {
        if (!this.resultsContainer) return;

        this.resultsContainer.innerHTML = '<div class="dadata-result-item">Ничего не найдено</div>';
        this.resultsContainer.style.display = 'block';
    };

    BX.DadataSearch.prototype.hideResults = function() {
        if (this.resultsContainer) {
            this.resultsContainer.style.display = 'none';
        }
    };

    BX.DadataSearch.prototype.showSpinner = function() {
        if (this.spinner) {
            this.spinner.style.display = 'block';
        }
    };

    BX.DadataSearch.prototype.hideSpinner = function() {
        if (this.spinner) {
            this.spinner.style.display = 'none';
        }
    };

    BX.DadataSearch.prototype.onResultClick = function(e) {
        var item = e.target.closest('.dadata-result-item');
        if (!item) return;

        var index = item.getAttribute('data-index');
        if (index !== null && this.currentResults && this.currentResults[index]) {
            this.selectAddress(this.currentResults[index]);
        }
    };

    BX.DadataSearch.prototype.selectAddress = function(address) {
        this.input.value = address.value;
        this.hideResults();

        // Можно добавить дополнительное событие
        BX.onCustomEvent(this, 'onAddressSelect', [address]);
    };

    BX.DadataSearch.prototype.onKeyDown = function(e) {
        if (!this.resultsContainer || this.resultsContainer.style.display === 'none') return;

        var items = this.resultsContainer.querySelectorAll('.dadata-result-item');
        if (items.length === 0) return;

        var key = e.key || e.keyCode;

        // Стрелка вниз
        if (key === 'ArrowDown' || key === 40) {
            e.preventDefault();
            this.selectedIndex = Math.min(this.selectedIndex + 1, items.length - 1);
            this.highlightItem(items);
        }
        // Стрелка вверх
        else if (key === 'ArrowUp' || key === 38) {
            e.preventDefault();
            this.selectedIndex = Math.max(this.selectedIndex - 1, -1);
            this.highlightItem(items);
        }
        // Enter
        else if (key === 'Enter' || key === 13) {
            e.preventDefault();
            if (this.selectedIndex >= 0 && this.currentResults && this.currentResults[this.selectedIndex]) {
                this.selectAddress(this.currentResults[this.selectedIndex]);
            }
        }
        // Escape
        else if (key === 'Escape' || key === 27) {
            this.hideResults();
        }
    };

    BX.DadataSearch.prototype.highlightItem = function(items) {
        // Убираем выделение со всех
        for (var i = 0; i < items.length; i++) {
            BX.removeClass(items[i], 'selected');
        }

        // Выделяем текущий
        if (this.selectedIndex >= 0 && items[this.selectedIndex]) {
            BX.addClass(items[this.selectedIndex], 'selected');

            // Прокручиваем к выделенному элементу
            items[this.selectedIndex].scrollIntoView({
                block: 'nearest',
                behavior: 'smooth'
            });
        }
    };

    BX.DadataSearch.prototype.onResultHover = function(e) {
        var item = e.target.closest('.dadata-result-item');
        if (!item) return;

        var index = item.getAttribute('data-index');
        if (index !== null) {
            this.selectedIndex = parseInt(index);

            var items = this.resultsContainer.querySelectorAll('.dadata-result-item');
            this.highlightItem(items);
        }
    };

    BX.DadataSearch.prototype.onDocumentClick = function(e) {
        if (!this.container.contains(e.target)) {
            this.hideResults();
        }
    };

})();
