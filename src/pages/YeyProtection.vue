<script setup>
import BreadCrumbs from "@/components/BreadCrumbs.vue";
</script>

<template>
    <BreadCrumbs :currentPage="'Функции защита для глаз'" />
    <div class="eye__protection">
        <div class="container cnt">
            <h1 class="page__name">Функции защита для глаз</h1>
            <h2 class="page__tile">О защите глаз</h2>
            <h3 class="page__subtile red"><span>«Защита для глаз»</span> Разработаны для защиты глаз от травм
                связанный
                со спортом</h3>
            <img src="/src/assets/img/eye_protection/center__img-1.png" alt="" class="eye__protection-img">
            <div class="eye__protection-wrapp">
                <div class="info__wrapp">
                    <div class="info__tl pointer-red"><span>1</span>Забор воздуха</div>
                    <div class="info__row">
                        <div class="info-lft"><img class="info-icon" src="/src/assets/img/eye_protection/info-1.png" alt="">
                        </div>
                        <div class="info__rght">
                            <p class="info__text">Воздух забирается через отверстия с обеих сторон и
                                выпускается через верхние и нижние отверстия скамейки для циркуляции воздуха и
                                предотвращения запотевания внутри протектора.</p>
                        </div>
                    </div>
                </div>
                <div class="info__wrapp">
                    <div class="info__tl pointer-red"><span>2</span>Внутренняя прокладка</div>
                    <div class="info__row">
                        <div class="info-lft"><img class="info-icon" src="/src/assets/img/eye_protection/info-2.png" alt="">
                        </div>
                        <div class="info__rght">
                            <p class="info__text">«Эластомер» с высокой амортизацией используется для части
                                подушечки, с которой кожа ребенка контактирует напрямую. Прикрепляя его ко всей
                                поверхности, он не только рассеивает и поглощает удар, но и создает отличную
                                посадку.</p>
                        </div>
                    </div>
                </div>
                <div class="info__wrapp">
                    <div class="info__tl pointer-red"><span>3</span>Совместимы с линзами по рецепту</div>
                    <div class="info__row">
                        <div class="info__rght">
                            <p class="info__text">По сколько они совместимы с линзами по рецепту ими могут даже
                                пользоваться дети в очках.</p>
                        </div>
                    </div>
                </div>
                <div class="info__wrapp">
                    <div class="info__tl pointer-red"><span>4</span>Жесткий нейлон (TR-90)</div>
                    <div class="info__row">
                        <div class="info__rght">
                            <p class="info__text">Эластичный материал, который трудно сломать. Он устойчив к
                                аллергии, поэтому его можно использовать с уверенностью. (Не все аллергии
                                поддерживаются.)</p>
                        </div>
                    </div>
                </div>
            </div>
            <p class="eye__protection-note"><span>*</span>Если вы используете линзы по рецепту, они будут
                продаваться в оптике или специализированном магазине. Для линз по рецепту рекомендуются линзы из
                поликарбоната.</p>
            <div class="btn-center link">
                <a href="#" class="btn">Каталог</a>
            </div>
        </div>
    </div>
</template>