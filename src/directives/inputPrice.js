export default {
    updated(el, binding) {
        const valueField = Number(el.value);
        const { value, arg } = binding;

        if (arg == "min") {
            if (valueField < value.min) {
                el.value = value.min;
                el.dispatchEvent(new Event('input'));
            }

            if (valueField > value.other) {
                el.value = value.other;
                el.dispatchEvent(new Event('input'));
            }

            return;
        }

        if (arg == "max") {
            if (valueField > value.max) {
                el.value = value.max;
                el.dispatchEvent(new Event('input'));
            }

            if (valueField < value.other) {
                el.value = value.other;
                el.dispatchEvent(new Event('input'));
            }

            return;
        }
    },
}