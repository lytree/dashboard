import { nextTick, onMounted, onActivated } from 'vue';
import { Fn } from '@vueuse/core';

export default function onMountedOrActivated(hook: Fn) {
    let mounted: boolean;

    onMounted(() => {
        hook();
        nextTick(() => {
            mounted = true;
        });
    });

    onActivated(() => {
        if (mounted) {
            hook();
        }
    });
}
