<?php
/*
Template Name: Шаблон ГЛАВНОЙ страницы
*/
get_header();
?>

<section class="hero">
    <div class="container">
        <div class="hero__info">
            <div class="hero__part">
                <ul class="breadcrumb">
                    <li class="breadcrumb__item">
                        <a class="item-link" href="#">Главная</a><a
                            class="item-link" href="#">Безопасность бизнеса</a>
                        <a class="item-link" href="#">Обеспечение порядка в местах проведения массовых мероприятий </a>
                    </li>
                </ul>

                </li>
                </ul>
                <h1 class="hero__title title"> <?php the_field('hero_title') ?> </h1>
            </div>
            <div class="hero__part-2">
                <img class="hero__stadion" src="http://test/wp-content/themes/testovoe-5 /images/project/stadion.png" alt="Стадион">
                <img class="hero__stadion-vector" src="http://test/wp-content/themes/testovoe-5 /images/project/stadion-vector.png" alt="Вектор">
            </div>
        </div>
    </div>
</section>

<section class="services">
    <div class="container">
        <div class="services__info">
            <div class="service__block">
                <h3>Риски</h3>
                <p>В современный период времени проведение больших массовых мероприятий имеет особенно
                    высокий
                    риск
                    опасности. Творческие встречи, концерты, праздники, спортивные соревнования, все это
                    требует
                    внимательного и тщательного контроля.</p>
            </div>
            <div class="service__block">
                <h3>Охрана</h3>
                <p>В случае обнаружения какой-либо опасности, каждому участнику встречи должна быть оказана
                    незамедлительная помощь со стороны охранных структур. Равным образом и для
                    предотвращения
                    внешних
                    угроз различного характера организация охраны массовых мероприятий является обязательным
                    условием.
                </p>
            </div>
        </div>
    </div>
</section>

<section class="clients">
    <div class="container">
        <h2 class="clients__title title"><?php the_field('clients_title') ?></h2>
        <div class="client__slider">
            <div class="client__logos">
                <?php
                if (have_rows('numbers_slider-repeater')):
                    while (have_rows('numbers_slider-repeater')) : the_row(); ?>


                        <div class="client__logo logo-1"><img src="<?php echo get_sub_field('slider_img')['url'] ?>" alt="<?php echo get_sub_field('slider_img')['alt'] ?>"></div>


                        <?php the_sub_field('sub_field_name'); ?>

                <?php
                    endwhile;
                else :
                    echo 'Ошибка. Поля не найдены';
                endif;

                ?>
            </div>
        </div>
        <div class="">
            <button class="prev"><svg width="8" height="14" viewBox="0 0 8 14" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M7.02344 11.3334L2.6901 7.00002L7.02344 2.66668L6.15677 0.93335L0.0901055 7.00002L6.15677 13.0667L7.02344 11.3334Z"
                        fill="white" />
                </svg>
            </button>
            <button class="next"><svg width="8" height="14" viewBox="0 0 8 14" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M0.976562 11.3334L5.3099 7.00002L0.976562 2.66668L1.84323 0.93335L7.90989 7.00002L1.84323 13.0667L0.976562 11.3334Z"
                        fill="white" />
                </svg>
            </button>
        </div>
    </div>
</section>

<footer class="newsletter">
    <div class="container">
        <div class="newsletter__info">
            <form class="newsletter__forms" method="post" action="">
                <h2 class="newsletter__title title">Подпишитесь на рассылку</h2>
                <p>Чтобы узнавать о новых предложениях</p>
                <div class="newsletter__form">
                    <input class="newsletter__input" type="email" name="email" placeholder="Email" required>
                    <input type="hidden" name="newsletter_submit" value="1">
                    <input class="newsletter__btn" type="submit" value="Отправить">
                </div>
            </form>

            <div class="newsletter__part2">
                <img class="newsletter__security" src="<?php echo get_template_directory_uri() ?> /images/project/cloud-security.png"
                    alt="Безопасность">
                <img class="newsletter__security-vector" src="<?php echo get_template_directory_uri() ?> /images/project/cloud-vector.png" alt="">
            </div>
        </div>
    </div>
</footer>

<?php get_footer(); ?>