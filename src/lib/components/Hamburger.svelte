<script>
    /** @type {boolean} */
    export let expanded;

    function toggle() {
        expanded = !expanded;
    }
</script>

<button on:click={toggle} class="md:hidden cursor-pointer group">
    <div class="bar" class:expanded-bar-1={expanded}></div>
    <div class="bar" class:expanded-bar-2={expanded}></div>
    <div class="bar" class:expanded-bar-3={expanded}></div>
</button>

<style lang="postcss">
    .bar {
        @apply my-1 w-7 h-1 bg-slate-700 rounded-full transition-all;
    }

    .expanded-bar-1 {
        transform: translateY(8px) rotate(-45deg);
    }

    .expanded-bar-2 {
        opacity: 0;
    }

    .expanded-bar-3 {
        transform: translateY(-8px) rotate(45deg);
    }
</style>
