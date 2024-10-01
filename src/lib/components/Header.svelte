<script>
    import Hamburger from "$lib/components/Hamburger.svelte";
    import MobileMenu from "$lib/components/MobileMenu.svelte";

    export let expanded = false;
</script>

<div class="max-w-7xl mx-auto">
    <div class="flex justify-between items-center px-4">
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
        <nav class="max-md:hidden flex items-center gap-6">
            <a
                class="text-xl font-semibold decoration-0 transition-colors text-black hover:text-orange-900"
                href="/">Home</a
            >
            <a
                class="text-xl font-semibold decoration-0 transition-colors text-black hover:text-orange-900"
                href="/#about">About</a
            >
            <a
                class="text-xl font-semibold decoration-0 transition-colors text-black hover:text-orange-900"
                href="/#schedule">Schedule</a
            >
            <a
                class="text-xl font-semibold decoration-0 transition-colors text-black hover:text-orange-900"
                href="/#rules">Rules</a
            >
            <a
                class="text-xl font-semibold decoration-0 transition-colors text-black hover:text-orange-900"
                href="/#faq">FAQ</a
            >
        </nav>
        <Hamburger bind:expanded />
    </div>
    <MobileMenu bind:expanded />
</div>
