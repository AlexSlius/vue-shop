export default {
    updated(el, binding) {
        const value = el.value.replace(/\D/g, '').slice(0, binding.value);

        if (value !== el.value) {
            el.value = value;
            el.dispatchEvent(new Event('input'));
        }
    }
}