<script lang="ts">
    import { slide } from "svelte/transition";

    export let expanded: boolean;

    function closeMenu() {
        expanded = false;
    }
</script>

{#if expanded}
    <div
        class="md:hidden absolute w-full select-none drop-shadow-2xl"
        transition:slide
    >
        <menu id="mobile-menu">
            <a class="mobile-menu-link" on:click={closeMenu} href="/">Home</a>
            <a class="mobile-menu-link" on:click={closeMenu} href="/#about">About</a>
            <a class="mobile-menu-link" on:click={closeMenu} href="/#schedule">Schedule</a>
            <a class="mobile-menu-link" on:click={closeMenu} href="/#rules">Rules</a>
            <a class="mobile-menu-link" on:click={closeMenu} href="/#faq">FAQ</a>
        </menu>
    </div>
{/if}

<style lang="postcss">
    a.mobile-menu-link {
        @apply block px-8 py-4 decoration-0 text-gray-800 transition-colors bg-white active:bg-orange-200;
    }
</style>
