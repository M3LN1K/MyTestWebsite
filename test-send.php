<?php
$log = date('Y-m-d H:i:s') . ' ' . print_r($_REQUEST, true);
file_put_contents($_SERVER['DOCUMENT_ROOT'] . '/logData.txt', $log . PHP_EOL, FILE_APPEND);
$log = date('Y-m-d H:i:s') . ' ' . print_r($_GET, true);
file_put_contents($_SERVER['DOCUMENT_ROOT'] . '/logData.txt', $log . PHP_EOL, FILE_APPEND);
$log = date('Y-m-d H:i:s') . ' ' . print_r($_POST, true);
file_put_contents($_SERVER['DOCUMENT_ROOT'] . '/logData.txt', $log . PHP_EOL, FILE_APPEND);
$log = date('Y-m-d H:i:s') . ' ' . print_r($_SERVER, true);
file_put_contents($_SERVER['DOCUMENT_ROOT'] . '/logData.txt', $log . PHP_EOL, FILE_APPEND);

echo json_encode(['status' => 'success']);