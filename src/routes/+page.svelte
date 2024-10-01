<script>
    import Welcome from "$lib/components/Welcome.svelte";
    import Sponsors from "$lib/components/Sponsors.svelte";
    import About from "$lib/components/About.svelte";
    import Schedule from "$lib/components/Schedule.svelte";
    import Rules from "$lib/components/Rules.svelte";
    import FAQ from "$lib/components/FAQ.svelte";
    import Organisers from "$lib/components/Organisers.svelte";
</script>

<div class="h-96 p-12 theme-bg-gradient">
    <Welcome />
</div>

<section id="sponsors" class="px-8 py-4 text-lg">
    <!-- Not linked in navigation -->
    <Sponsors />
</section>

<section id="about" class="px-8 py-4 text-lg">
    <About />
</section>

<section id="schedule" class="px-8 py-4 text-lg">
    <Schedule />
</section>

<section id="rules" class="px-8 py-4 text-lg">
    <Rules />
</section>

<section id="faq" class="px-8 py-4 text-lg">
    <FAQ />
</section>

<section id="organisers" class="px-8 py-4 text-lg">
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
