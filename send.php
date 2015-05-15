<?
    $to  = "zephyro@yandex.ru";
    $subject = "Сообщение с сайта СтавМастерСтрой";
    $name = htmlspecialchars($_POST['name']);
    $phone = htmlspecialchars($_POST['phone']);


    $message = "<p>Имя: {$name},</p> <p>Телефон: {$phone},</p>";

    $headers  = "Content-type: text/html; charset=utf-8 \r\n";

    mail($to, $subject, $message, $headers);
?>