<?if(!defined("B_PROLOG_INCLUDED") || B_PROLOG_INCLUDED!==true) die();?>

<!-- Футер -->
<footer class="footer-style-2">
    <div class="footer-top-area brand-bg pad-70">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 col-md-12 col-sm-12">
                    <div class="footer-widget footer-widget-center text-center">
                        <!-- Лого + текст -->
                        <div class="footer-logo">
                            <a href="#">
                                <img src="img/logo/logo-white.png" alt=""/>
                            </a>
                        </div>
                        <p>Если вы похожи на большинство компаний, у вас нет маркетингового бюджета в миллион
                            долларов<br>
                            или своей команды разработки. Но это не значит, что у вас не может быть<br>
                            сайта мирового класса. И мы вам в этом поможем!</p>

                        <!-- Соц. сети -->
                        <div class="social-icon">
                            <a href="#"><i class="fa fa-facebook"></i></a>
                            <a href="#"><i class="fa fa-twitter"></i></a>
                            <a href="#"><i class="fa fa-google-plus"></i></a>
                            <a href="#"><i class="fa fa-linkedin"></i></a>
                            <a href="#"><i class="fa fa-youtube"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- нижнее меню -->
    <div class="footer-bottom-area pad-20 brand-bg footer-border">
        <div class="container">
            <div class="row">
                <div class="col-lg-5 col-md-5 col-sm-12">
                    <div class="copyright white-text">
                        <p>We Coders © 2018</p>
                    </div>
                </div>

                <div class="col-lg-7 col-md-7 col-sm-12">
                    <div class="footer-nav white-text">
                        <nav>
                            <ul>
                                <li class="mega-parent">
                                    <a href="index.html">Главная</a>
                                </li>
                                <li>
                                    <a href="about_us.html">О нас</a>
                                </li>
                                <li>
                                    <a href="services.html">Услуги</a>
                                </li>
                                <li>
                                    <a href="portfolio.html">Портфолио</a>
                                </li>
                                <li>
                                    <a href="blog.html">Блог</a>
                                </li>
                                <li>
                                    <a href="contacts.html">Контакты</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>

<?php
// интеграция скриптов
Asset::getInstance()->addJs(SITE_TEMPLATE_PATH.'/assets/js/vendor/jquery-1.12.0.min.js');
Asset::getInstance()->addJs(SITE_TEMPLATE_PATH.'/assets/js/bootstrap.min.js');
Asset::getInstance()->addJs(SITE_TEMPLATE_PATH.'/assets/js/owl.carousel.min.js');
Asset::getInstance()->addJs(SITE_TEMPLATE_PATH.'/assets/js/jquery.counterup.min.js');
Asset::getInstance()->addJs(SITE_TEMPLATE_PATH.'/assets/js/waypoints.min.js');
Asset::getInstance()->addJs(SITE_TEMPLATE_PATH.'/assets/js/jquery.magnific-popup.min.js');
Asset::getInstance()->addJs(SITE_TEMPLATE_PATH.'/assets/js/jquery.mixitup.min.js');
Asset::getInstance()->addJs(SITE_TEMPLATE_PATH.'/assets/js/jquery.meanmenu.js');
Asset::getInstance()->addJs(SITE_TEMPLATE_PATH.'/assets/js/jquery.nav.js');
Asset::getInstance()->addJs(SITE_TEMPLATE_PATH.'/assets/js/jquery.parallax-1.1.3.js');
Asset::getInstance()->addJs(SITE_TEMPLATE_PATH.'/assets/js/animate-text.js');
Asset::getInstance()->addJs(SITE_TEMPLATE_PATH.'/assets/js/plugins.js');
Asset::getInstance()->addJs(SITE_TEMPLATE_PATH.'/assets/js/main.js');
?>
</body>
</html>