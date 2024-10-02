<script lang="ts">
    import { navigating } from "$app/stores";
    import { slide } from "svelte/transition";

    export let expanded: boolean;

    function closeMenu() {
        expanded = false;
    }

    // $: is a reactive statement; it runs whenever the value of the variable changes
    $: if ($navigating) closeMenu();
</script>

{#if expanded}
    <div
        class="md:hidden absolute w-full select-none drop-shadow-2xl"
        transition:slide
    >
        <menu id="mobile-menu">
            <a on:click={closeMenu} href="/">Home</a>
            <a on:click={closeMenu} href="/#about">About</a>
            <a on:click={closeMenu} href="/#schedule">Schedule</a>
            <a on:click={closeMenu} href="/#rules">Rules</a>
            <a on:click={closeMenu} href="/#faq">FAQ</a>
        </menu>
    </div>
{/if}

<style lang="postcss">
    a {
        @apply block px-8 py-4 decoration-0 text-gray-800 transition-colors bg-white active:bg-orange-200;
    }
</style>
