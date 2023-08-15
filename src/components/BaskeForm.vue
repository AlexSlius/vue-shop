<template>
    <div class="basket__wrapp-order">
        <div class="basket__inner-order">
            <p class="basket__order-title">Оформление заказа</p>
            <p class="order-in">Ваше имя</p>
            <input class="order-input" type="text">
            <p class="order-in">Ваш E-mail</p>
            <input class="order-input" type="text">
            <p class="order-in">Ваш Телефон</p>
            <input class="order-input" type="text">
            <p class="order-in">Адрес доставки</p>
            <input class="order-input" type="text">
            <p class="order-in">Примечание</p>
            <textarea class="order-textarea" name="" id="" cols="20" rows="4"></textarea>
            <p class="order-in">Способ доставки</p>
            <div class="select-order">
                <div class="select__header-order">
                    <div class="select__current-order">Пошта-1</div>
                    <div class="select__icon-order"></div>
                </div>
                <div class="select__body-order">
                    <div class="select__item-order">Пошта-1</div>
                    <div class="select__item-order">Пошта-2</div>
                    <div class="select__item-order">Пошта-3</div>
                </div>
            </div>
            <p class="order-in">Способ оплаты</p>
            <div class="select-order">
                <div class="select__header-order">
                    <div class="select__current-order">Оплата-1</div>
                    <div class="select__icon-order"></div>
                </div>
                <div class="select__body-order">
                    <div class="select__item-order">Оплата-1</div>
                    <div class="select__item-order">Оплата-2</div>
                    <div class="select__item-order">Оплата-3</div>
                </div>
            </div>
            <div class="order-btn btn">Заказ подтверждаю</div>
        </div>
    </div>
</template>