<script>
    import Hamburger from "$lib/components/Hamburger.svelte";
    import MobileMenu from "$lib/components/MobileMenu.svelte";

    export let expanded = false;
</script>

<div class="max-w-7xl mx-auto">
    <div class="flex justify-between items-center h-[60px]">
        <a href="/" class="select-none">
            <div class="flex items-center">
                <img
                    class="w-20 h-15"
                    src="https://placehold.co/80x60"
                    alt="Cam Hack Logo"
                />
                <span class="ml-4 text-2xl font-extrabold">Cam Hack 2024</span>
            </div>
        </a>
        <div class="px-4">
            <nav
                class="max-md:hidden flex items-center gap-6 text-xl font-semibold transition-colors"
            >
                <a class="hover:text-amber-600" href="/#about">About</a>
                <a class="hover:text-amber-600" href="/#schedule">Schedule</a>
                <a class="hover:text-amber-600" href="/#rules">Rules</a>
                <a class="hover:text-amber-600" href="/#faq">FAQ</a>
                <a
                    class="px-4 py-2 bg-orange-300 rounded-lg hover:scale-105"
                    href="/signup">Sign up!</a
                >
            </nav>
            <Hamburger bind:expanded />
        </div>
    </div>
    {#if expanded}
        <MobileMenu bind:expanded />
    {/if}
</div>
