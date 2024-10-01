<script lang="ts">
    import { slide } from "svelte/transition";

    let isExpanded = false;

    function toggle() {
        isExpanded = !isExpanded;
    }
</script>

<div class="mb-4">
    <button class="font-bold cursor-pointer" on:click={toggle}>
        <slot name="question" />
        <i class="chevron" class:up={isExpanded}></i>
    </button>
    {#if isExpanded}
        <div class="mb-4" transition:slide>
            <slot />
        </div>
    {/if}
</div>

<style>
    /* By setting the bottom and right borders of a square
       and rotating it, we can create a convincing chevron. */
    .chevron {
        margin-left: 0.5em;
        border: medium solid currentColor;
        border-width: 0 3px 3px 0;
        display: inline-block;
        padding: 0.2em;
        transition: transform 0.15s;
        transform: translateY(-4px) rotate(45deg);
    }

    .chevron.up {
        transform: rotate(-135deg);
    }
</style>
