<?php
$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$mail = $_POST['user_mail'];
$token = "Токен бота";
$chat_id = "-631373112";
$arr = array(
    'Имя пользователя: ' => $name,
    'Телефон: ' => $phone,
    'Email: ' => $mail
);
foreach ($arr as $key => $value){
    $txt .= "<b>".$key."</b>".$value."%0A";
};
$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");

if ($sendToTelegram) {
    header("Location: http://proger/#/index5.html");
} else{
    echo "Error";
}
//?>
<!--https://api.telegram.org/bot1940716999:AAEzCyxpESzVlDv69iTtNJOOoZ7DigtVoJg/getUpdates-->
