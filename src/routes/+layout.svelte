<script>
    import "../app.css";

    import Footer from "$lib/components/Footer.svelte";
    import Header from "$lib/components/Header.svelte";
</script>

<header class="bg-white shadow-md">
    <Header />
</header>

<main class="flex-1">
    <slot />
</main>

<footer class="p-8 theme-bg-gradient">
    <Footer />
</footer>
