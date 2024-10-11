<?php
// Рассылка

ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// Подключаем файлы PHPMailer
require 'PHPMailer-master/PHPMailer.php';
require 'PHPMailer-master/SMTP.php';
require 'PHPMailer-master/Exception.php';

function handle_newsletter_form_submission() {

    if (isset($_POST['newsletter_submit'])) {
        $email = sanitize_email($_POST['email']);

        if (!is_email($email)) {
            echo '<p style="color: red;">Пожалуйста, введите корректный email адрес.</p>';
            return;
        }

        // Настройка PHPMailer
        $mail = new PHPMailer\PHPMailer\PHPMailer();

        try {
            // Включаем отладку SMTP для вывода ошибок
            $mail->SMTPDebug = 2; // 0 = без отладки, 2 = полная отладка

            // Настройки сервера
            $mail->isSMTP();
            $mail->Host = 'smtp.gmail.com';  // SMTP-сервер Gmail
            $mail->SMTPAuth = true;
            $mail->Username = 'ivanov11022012@gmail.com';  // Ваш email
            $mail->Password = 'lhcc jvzf fgfz gzdk';  // Ваш пароль от email или пароль приложения
            $mail->SMTPSecure = PHPMailer\PHPMailer\PHPMailer::ENCRYPTION_STARTTLS;
            $mail->Port = 587;

            // Настройки письма
            $mail->setFrom('ivanov11022012@gmail.com', 'Николай'); // Адрес отправителя
            $mail->addAddress($email); // Кому отправляем

            // Содержимое письма
            $mail->isHTML(true);
            $mail->Subject = 'Спасибо за подписку на рассылку!';
            $mail->Body = 'Вы успешно подписались на рассылку новостей. Будем держать вас в курсе новых предложений!';

            // Отправляем письмо
            $mail->send();
            echo '<p style="color: green;">Спасибо за подписку! Письмо отправлено на ваш email.</p>';
        } catch (Exception $e) {
            echo '<p style="color: red;">Ошибка при отправке письма: ' . $mail->ErrorInfo . '</p>';
        }
    }
}

// Вызываем функцию обработки формы
handle_newsletter_form_submission();
?>
