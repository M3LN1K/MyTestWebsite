<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("История ");
$APPLICATION->SetPageProperty("keywords", "История ");
$APPLICATION->SetPageProperty("description", "История ");
use Bitrix\Main\Page\Asset;
// Задаем свойство страницы
// Задаем тайтл странице
$APPLICATION->SetPageProperty("TITLE", " История | We project");
Asset::getInstance()->addCss(SITE_TEMPLATE_PATH.'/assets/css/custom.css');

?>
<section class="company-history">
    <div class="container">
        <header class="history-header">
            <h1 class="history-title">История компании «Solarion Technologies»</h1>
            <p class="history-subtitle">От гаража до лидера рынка умной энергетики</p>
        </header>

        <div class="history-timeline">
            <!-- Основание -->
            <article class="history-period">
                <div class="period-content">
                    <h1 class="period-title">
                        <span class="period-year">2015</span>
                        <span class="period-title-text">Основание</span>
                    </h1>
                    <div class="period-description">
                        <p class="period-text">Компания была основана группой энтузиастов-инженеров из Санкт-Петербурга, которые верили, что умная энергетика должна быть доступной. Первым продуктом стал компактный солнечный контроллер для дачников, собранный буквально в гараже.</p>
                    </div>
                </div>
            </article>

            <!-- Первый прорыв -->
            <article class="history-period">
                <div class="period-content">
                    <h1 class="period-title">
                        <span class="period-year">2017</span>
                        <span class="period-title-text">Первый прорыв</span>
                    </h1>
                    <div class="period-description">
                        <p class="period-text">После двух лет экспериментов мы разработали гибридный инвертор с КПД 97,5% — рекордный показатель для российского рынка. Это привлекло первых инвесторов и позволило открыть собственное производство.</p>
                    </div>
                </div>
            </article>

            <!-- Экспансия -->
            <article class="history-period">
                <div class="period-content">
                    <h1 class="period-title">
                        <span class="period-year period-year-range">2019-2021</span>
                        <span class="period-title-text">Экспансия</span>
                    </h1>
                    <div class="period-description">
                        <p class="period-text">Мы вышли на рынки Казахстана и Беларуси, запустили линейку «умных» домашних электростанций под брендом SolariHome. В 2020 году наши системы помогали обеспечивать энергией временные госпитали в период пандемии.</p>
                    </div>
                </div>
            </article>

            <!-- Инновации -->
            <article class="history-period">
                <div class="period-content">
                    <h1 class="period-title">
                        <span class="period-year period-year-range">2022-2023</span>
                        <span class="period-title-text">Инновации</span>
                    </h1>
                    <div class="period-description">
                        <p class="period-text">Запустили первую в России сеть автономных зарядных станций на солнечной энергии для электромобилей. Разработали облачную платформу Solarion Cloud для управления энергопотоками в режиме реального времени.</p>
                    </div>
                </div>
            </article>

            <!-- Сегодня -->
            <article class="history-period history-period-today">
                <div class="period-content">
                    <h1 class="period-title">
                        <span class="period-year period-year-current">2024</span>
                        <span class="period-title-text">Сегодня</span>
                    </h1>
                    <div class="period-description">
                        <ul class="achievements-list">
                            <li class="achievement-item">
                                <span class="achievement-icon">•</span>
                                <span class="achievement-text">40 000+ установленных систем по всей стране</span>
                            </li>
                            <li class="achievement-item">
                                <span class="achievement-icon">•</span>
                                <span class="achievement-text">3 производственных площадки</span>
                            </li>
                            <li class="achievement-item">
                                <span class="achievement-icon">•</span>
                                <span class="achievement-text">12 международных патентов</span>
                            </li>
                            <li class="achievement-item">
                                <span class="achievement-icon">•</span>
                                <span class="achievement-text">85% деталей производятся локално</span>
                            </li>
                            <li class="achievement-item">
                                <span class="achievement-icon">•</span>
                                <span class="achievement-text">Партнёрство с ведущими строительными холдингами</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </article>
        </div>

        <!-- Философия и ценности -->
        <div class="company-values">
            <div class="philosophy-block">
                <h1 class="values-title">Наша философия</h1>
                <blockquote class="philosophy-quote">
                    <p class="quote-text">«Не ждать светлого будущего — создавать его сегодня из солнечного света».</p>
                </blockquote>
            </div>

            <div class="key-values-block">
                <h1 class="values-title">Ключевые ценности</h1>
                <ul class="values-list">
                    <li class="value-item">
                        <span class="value-icon">✓</span>
                        <div class="value-content">
                            <strong class="value-name">Доступность</strong>
                            <span class="value-description">— энергия для каждого</span>
                        </div>
                    </li>
                    <li class="value-item">
                        <span class="value-icon">✓</span>
                        <div class="value-content">
                            <strong class="value-name">Надёжность</strong>
                            <span class="value-description">— гарантия 10 лет на оборудование</span>
                        </div>
                    </li>
                    <li class="value-item">
                        <span class="value-icon">✓</span>
                        <div class="value-content">
                            <strong class="value-name">Инновации</strong>
                            <span class="value-description">— собственный R&D центр с 35 инженерами</span>
                        </div>
                    </li>
                </ul>
            </div>
        </div>

        <!-- Заключение -->
        <div class="history-conclusion">
            <p class="conclusion-text">Компания продолжает развивать технологии умной энергетики, работая над проектом автономных экопоселений и промышленных накопителей нового поколения.</p>
        </div>
    </div>
</section>
<?php //=
//// Вывод свойств на странице
//"Описание =".$APPLICATION-> GetPageProperty('description')
//?>
<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>
