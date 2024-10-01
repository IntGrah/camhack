<script lang="ts">
    import { slide } from "svelte/transition";

    export let expanded: boolean;
</script>

{#if expanded}
    <div class="md:hidden absolute w-full select-none" transition:slide>
        <menu id="mobile-menu">
            <a class="block px-8 py-4 decoration-0 text-gray-800 transition-colors bg-white active:bg-orange-200" href="#home">Home</a>
            <a class="block px-8 py-4 decoration-0 text-gray-800 transition-colors bg-white active:bg-orange-200" href="#about">About</a>
            <a class="block px-8 py-4 decoration-0 text-gray-800 transition-colors bg-white active:bg-orange-200" href="#schedule">Schedule</a>
            <a class="block px-8 py-4 decoration-0 text-gray-800 transition-colors bg-white active:bg-orange-200" href="#rules">Rules</a>
            <a class="block px-8 py-4 decoration-0 text-gray-800 transition-colors bg-white active:bg-orange-200" href="#faq">FAQ</a>
        </menu>
    </div>
{/if}
