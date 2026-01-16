<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Наши достижения");
$APPLICATION->SetPageProperty("keywords", "Наши достижения");
$APPLICATION->SetPageProperty("description", "Наши достижения");

// Задаем свойство страницы
// Задаем тайтл странице
$APPLICATION->SetPageProperty("TITLE"," Достижения | We project");


?>

<?=
// Вывод свойств на странице
"Описание =".$APPLICATION-> GetPageProperty('description')
?>
<p><h1>Наши достижения</h1></p>
<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>
