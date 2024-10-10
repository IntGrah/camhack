<script>
    import Hero from "$lib/components/Hero.svelte";
    import Sponsors from "$lib/components/Sponsors.svelte";
    import About from "$lib/components/About.svelte";
    import Schedule from "$lib/components/Schedule.svelte";
    import Rules from "$lib/components/Rules.svelte";
    import FAQ from "$lib/components/FAQ.svelte";
    import Organisers from "$lib/components/Organisers.svelte";
</script>

<svelte:head>
    <title>Cam Hack 2024</title>
</svelte:head>

<div class="p-8 sm:p-12 theme-bg-gradient">
    <Hero />
</div>

<section id="sponsors">
    <!-- Not linked in navigation -->
    <Sponsors />
</section>

<section id="about">
    <About />
</section>

<section id="schedule">
    <Schedule />
</section>

<section id="rules">
    <Rules />
</section>

<section id="faq">
    <FAQ />
</section>

<section id="organisers">
    <!-- Not linked in navigation -->
    <Organisers />
</section>

<style>
    section:nth-child(odd) {
        background-color: #fafafa;
    }

    section:nth-child(even) {
        background-color: #ffffff;
    }
</style>
