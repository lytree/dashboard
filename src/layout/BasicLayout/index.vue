<template>
    <div class="flex flex-col w-full h-full min-w-[1200px]">
        <header
            class="flex-shrink-0 w-full box-border duration-300 ease-in-out fixed z-[1001] min-w-[1200px] h-[56px] pl-[0]">
            header
        </header>
        <div
            class="flex-shrink-0 w-full box-border duration-300 ease-in-out z-[999] fixed top-[56px] min-w-[1200px] h-[56px] pl-[0]">
            tab
        </div>
        <aside class="fixed left-0 top-0 box-border h-full transition-all z-[1002] w-[200px] pt-0 ">
            aside
        </aside>
        <main class="grow w-full box-border duration-300 ease-in-out overflow-hidden">
            content
        </main>
        <footer
            class="z-[999] box-border w-full left-0 bottom-0 duration-300 ease-in-out flex-shrink-0 min-w-[1200px] h-[56px] pl-[0] fixed">
            footer
        </footer>
    </div>
</template>
<script setup lang="ts">

</script>
<style>

</style>