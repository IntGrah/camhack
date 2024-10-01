<script lang="ts">
    export let expanded: boolean;

    function toggle() {
        expanded = !expanded;
    }
</script>

<button on:click={toggle} class="md:hidden cursor-pointer group">
    <div
        class="my-1 w-7 h-1 bg-slate-700 rounded-full transition-all"
        class:expanded-bar-1={expanded}
    ></div>
    <div
        class="my-1 w-7 h-1 bg-slate-700 rounded-full transition-all"
        class:expanded-bar-2={expanded}
    ></div>
    <div
        class="my-1 w-7 h-1 bg-slate-700 rounded-full transition-all"
        class:expanded-bar-3={expanded}
    ></div>
</button>

<style>
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
