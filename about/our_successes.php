<?php
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Наши достижения");
$APPLICATION->SetPageProperty("keywords", "Наши достижения");
$APPLICATION->SetPageProperty("description", "Наши достижения");
use Bitrix\Main\Page\Asset;

// Задаем свойство страницы
// Задаем тайтл странице
$APPLICATION->SetPageProperty("TITLE"," Достижения | We project");
Asset::getInstance()->addCss(SITE_TEMPLATE_PATH.'/assets/css/custom.css');


?>

<section class="achievements">
    <div class="container">
        <header class="achievements-header">
            <h1 class="achievements-main-title">Достижения компании «Solarion Technologies»</h1>
        </header>

        <!-- 🏆 Награды и признание -->
        <section class="achievements-category">
            <h1 class="category-title">
                <span class="category-icon">🏆</span>
                Награды и признание
            </h1>

            <div class="category-subsection">
                <h1 class="subsection-title">Международные награды</h1>
                <ul class="achievements-list">
                    <li class="achievement-item">
                        <h1 class="achievement-year">2023 — Премия «Global Green Tech»</h1>
                        <p class="achievement-description">Лучший инновационный продукт в области возобновляемой энергетики (за платформу Solarion Cloud)</p>
                    </li>
                    <li class="achievement-item">
                        <h1 class="achievement-year">2022 — Европейская энергетическая премия</h1>
                        <p class="achievement-description">Золотая медаль за разработку гибридных инверторов нового поколения</p>
                    </li>
                    <li class="achievement-item">
                        <h1 class="achievement-year">2021 — «Технологический прорыв года»</h1>
                        <p class="achievement-description">Награда от ассоциации «Renewable Energy Leaders»</p>
                    </li>
                </ul>
            </div>

            <div class="category-subsection">
                <h1 class="subsection-title">Национальное признание</h1>
                <ul class="achievements-list">
                    <li class="achievement-item">
                        <h1 class="achievement-year">2023 — «Лучший экспортер года»</h1>
                        <p class="achievement-description">Награда Министерства промышленности и торговли РФ</p>
                    </li>
                    <li class="achievement-item">
                        <h1 class="achievement-year">2022 — Премия «Инновация года»</h1>
                        <p class="achievement-description">Всероссийский конкурс технологических стартапов</p>
                    </li>
                    <li class="achievement-item">
                        <h1 class="achievement-year">2021 — «Эко-компания года»</h1>
                        <p class="achievement-description">Национальная экологическая премия</p>
                    </li>
                </ul>
            </div>
        </section>

        <!-- 🚀 Технологические достижения -->
        <section class="achievements-category">
            <h1 class="category-title">
                <span class="category-icon">🚀</span>
                Технологические достижения
            </h1>

            <div class="category-subsection">
                <h1 class="subsection-title">Запатентованные разработки</h1>
                <ul class="achievements-list">
                    <li class="achievement-item">
                        <h1 class="achievement-name">Система адаптивного управления энергией</h1>
                        <p class="achievement-description">Уникальный алгоритм, повышающий эффективность солнечных панелей на 27%</p>
                    </li>
                    <li class="achievement-item">
                        <h1 class="achievement-name">Беспроводная технология мониторинга</h1>
                        <p class="achievement-description">Собственный протокол передачи данных для удаленных энергосистем</p>
                    </li>
                    <li class="achievement-item">
                        <h1 class="achievement-name">Гибридный накопитель «S-Volt»</h1>
                        <p class="achievement-description">Компактный аккумулятор с рекордным сроком службы — 15 лет</p>
                    </li>
                </ul>
            </div>

            <div class="category-subsection">
                <h1 class="subsection-title">Промышленные решения</h1>
                <ul class="achievements-list">
                    <li class="achievement-item">
                        <h1 class="achievement-name">Крупнейшая частная солнечная электростанция</h1>
                        <p class="achievement-description">Построена в 2022 году в Краснодарском крае (мощность 25 МВт)</p>
                    </li>
                    <li class="achievement-item">
                        <h1 class="achievement-name">Первый в России «умный» микрорайон</h1>
                        <p class="achievement-description">Полностью автономное энергоснабжение для 500 домов в Сочи</p>
                    </li>
                </ul>
            </div>
        </section>

        <!-- 🌍 Экологические достижения -->
        <section class="achievements-category">
            <h1 class="category-title">
                <span class="category-icon">🌍</span>
                Экологические достижения
            </h1>

            <div class="category-subsection">
                <h1 class="subsection-title">Вклад в устойчивое развитие</h1>
                <ul class="achievements-list">
                    <li class="achievement-item">
                        <h1 class="achievement-name">Сокращение выбросов CO₂</h1>
                        <p class="achievement-description">Наши системы предотвратили выброс 120 000 тонн углекислого газа</p>
                    </li>
                    <li class="achievement-item">
                        <h1 class="achievement-name">«Зеленые» инициативы</h1>
                        <p class="achievement-description">Посажено 10 000 деревьев в рамках программы лесовосстановления</p>
                    </li>
                    <li class="achievement-item">
                        <h1 class="achievement-name">Переход на zero-waste производство</h1>
                        <p class="achievement-description">95% отходов производства перерабатывается или повторно используется</p>
                    </li>
                </ul>
            </div>

            <div class="category-subsection">
                <h1 class="subsection-title">Образовательные проекты</h1>
                <ul class="achievements-list">
                    <li class="achievement-item">
                        <h1 class="achievement-name">«Солнечные школы»</h1>
                        <p class="achievement-description">Оборудовали 50 школ по всей России учебными солнечными станциями</p>
                    </li>
                    <li class="achievement-item">
                        <h1 class="achievement-name">Онлайн-академия Solarion</h1>
                        <p class="achievement-description">Бесплатные курсы по зеленой энергетике для 15 000+ студентов</p>
                    </li>
                </ul>
            </div>
        </section>

        <!-- 📈 Бизнес-достижения -->
        <section class="achievements-category">
            <h1 class="category-title">
                <span class="category-icon">📈</span>
                Бизнес-достижения
            </h1>

            <div class="category-subsection">
                <h1 class="subsection-title">Рыночные показатели</h1>
                <ul class="achievements-list">
                    <li class="achievement-item">
                        <h1 class="achievement-name">Рост выручки</h1>
                        <p class="achievement-description">Среднегодовой рост — 85% за последние 3 года</p>
                    </li>
                    <li class="achievement-item">
                        <h1 class="achievement-name">Экспорт в 12 стран</h1>
                        <p class="achievement-description">Включая Германию, Финляндию, ОАЭ и Сингапур</p>
                    </li>
                    <li class="achievement-item">
                        <h1 class="achievement-name">Лидер рынка</h1>
                        <p class="achievement-description">35% доли российского рынка домашних солнечных электростанций</p>
                    </li>
                </ul>
            </div>

            <div class="category-subsection">
                <h1 class="subsection-title">Партнерства</h1>
                <ul class="achievements-list">
                    <li class="achievement-item">
                        <h1 class="achievement-name">Сотрудничество с «Росатом»</h1>
                        <p class="achievement-description">Совместная разработка промышленных накопителей энергии</p>
                    </li>
                    <li class="achievement-item">
                        <h1 class="achievement-name">Партнерство с МГУ</h1>
                        <p class="achievement-description">Научно-исследовательская лаборатория «Энергетика будущего»</p>
                    </li>
                    <li class="achievement-item">
                        <h1 class="achievement-name">Соглашение с Сбербанком</h1>
                        <p class="achievement-description">Специальная программа льготного кредитования для клиентов</p>
                    </li>
                </ul>
            </div>
        </section>

        <!-- 👥 Социальные достижения -->
        <section class="achievements-category">
            <h1 class="category-title">
                <span class="category-icon">👥</span>
                Социальные достижения
            </h1>

            <div class="category-subsection">
                <h1 class="subsection-title">Команда и культура</h1>
                <ul class="achievements-list">
                    <li class="achievement-item">
                        <h1 class="achievement-name">«Лучший работодатель»</h1>
                        <p class="achievement-description">Рейтинг HeadHunter — 4.8/5 по отзывам сотрудников</p>
                    </li>
                    <li class="achievement-item">
                        <h1 class="achievement-name">Женщины в STEM</h1>
                        <p class="achievement-description">45% руководящих позиций занимают женщины-инженеры</p>
                    </li>
                    <li class="achievement-item">
                        <h1 class="achievement-name">Программа стажировок</h1>
                        <p class="achievement-description">Ежегодно принимаем 100+ молодых специалистов</p>
                    </li>
                </ul>
            </div>

            <div class="category-subsection">
                <h1 class="subsection-title">Социальная ответственность</h1>
                <ul class="achievements-list">
                    <li class="achievement-item">
                        <h1 class="achievement-name">Энергия для отдаленных регионов</h1>
                        <p class="achievement-description">Обеспечили электричеством 50 удаленных деревень</p>
                    </li>
                    <li class="achievement-item">
                        <h1 class="achievement-name">Поддержка медицины</h1>
                        <p class="achievement-description">Безвозмездно оборудовали солнечными станциями 15 районных больниц</p>
                    </li>
                    <li class="achievement-item">
                        <h1 class="achievement-name">Инклюзивные проекты</h1>
                        <p class="achievement-description">Специальные тарифы для социальных учреждений</p>
                    </li>
                </ul>
            </div>
        </section>

        <!-- 🏭 Производственные достижения -->
        <section class="achievements-category">
            <h1 class="category-title">
                <span class="category-icon">🏭</span>
                Производственные достижения
            </h1>

            <div class="category-subsection">
                <h1 class="subsection-title">Инфраструктура</h1>
                <ul class="achievements-list">
                    <li class="achievement-item">
                        <h1 class="achievement-name">Собственный научный центр</h1>
                        <p class="achievement-description">3 500 м² лабораторий и испытательных полигонов</p>
                    </li>
                    <li class="achievement-item">
                        <h1 class="achievement-name">Полный производственный цикл</h1>
                        <p class="achievement-description">От проектирования чипов до сборки готовых решений</p>
                    </li>
                    <li class="achievement-item">
                        <h1 class="achievement-name">Сертификация ISO</h1>
                        <p class="achievement-description">Международные стандарты качества 9001:2015 и 14001:2015</p>
                    </li>
                </ul>
            </div>

            <div class="category-subsection">
                <h1 class="subsection-title">Инновации в производстве</h1>
                <ul class="achievements-list">
                    <li class="achievement-item">
                        <h1 class="achievement-name">Роботизированная линия сборки</h1>
                        <p class="achievement-description">Первая в России полностью автоматизированная линия для сборки солнечных инверторов</p>
                    </li>
                    <li class="achievement-item">
                        <h1 class="achievement-name">Собственное ПО</h1>
                        <p class="achievement-description">100% программного обеспечения разрабатывается внутри компании</p>
                    </li>
                </ul>
            </div>
        </section>

        <!-- 🔮 Будущие цели (до 2026) -->
        <section class="achievements-category future-goals">
            <h1 class="category-title">
                <span class="category-icon">🔮</span>
                Будущие цели (до 2026)
            </h1>

            <ul class="achievements-list goals-list">
                <li class="achievement-item goal-item">
                    <h1 class="achievement-name">Выход на IPO</h1>
                    <p class="achievement-description">Планируемое размещение на Московской бирже</p>
                </li>
                <li class="achievement-item goal-item">
                    <h1 class="achievement-name">Производство солнечных панелей</h1>
                    <p class="achievement-description">Запуск собственного завода мощностью 100 МВт в год</p>
                </li>
                <li class="achievement-item goal-item">
                    <h1 class="achievement-name">Международный R&D центр</h1>
                    <p class="achievement-description">Открытие исследовательского центра в Сингапуре</p>
                </li>
                <li class="achievement-item goal-item">
                    <h1 class="achievement-name">Цель: 100 000 установок</h1>
                    <p class="achievement-description">Планируем удвоить количество установленных систем</p>
                </li>
            </ul>
        </section>

        <!-- Заключение -->
        <footer class="achievements-footer">
            <p class="achievements-conclusion">Каждое достижение подтверждено сертификатами, патентами и отчетами. Solarion Technologies продолжает устанавливать новые стандарты в индустрии зеленой энергетики.</p>
        </footer>
    </div>
</section>


<?php require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>
