<script lang="ts">
    import { slide } from "svelte/transition";

    let isExpanded = false;

    function toggle() {
        isExpanded = !isExpanded;
    }
</script>

<div class="container">
    <!-- svelte-ignore a11y-click-events-have-key-events -->
    <!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
    <h3 class="toggle" on:click={toggle}>
        <slot name="question" />
        <i class="chevron" class:up={isExpanded}></i>
    </h3>
    {#if isExpanded}
        <div class="answer" transition:slide>
            <slot />
        </div>
    {/if}
</div>

<style>
    div.container {
        /* Empty */
    }

    h3.toggle {
        cursor: pointer;
    }

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

    div.answer {
        margin-bottom: 1em;
    }
</style>
