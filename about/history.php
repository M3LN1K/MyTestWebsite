<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("История ");
$APPLICATION->SetPageProperty("keywords", "История ");
$APPLICATION->SetPageProperty("description", "История ");

// Задаем свойство страницы
// Задаем тайтл странице
$APPLICATION->SetPageProperty("TITLE", " История | We project");


?>

<?=
// Вывод свойств на странице
"Описание =".$APPLICATION-> GetPageProperty('description')
?>
<p><h1>История компании</h1></p>
<?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>
