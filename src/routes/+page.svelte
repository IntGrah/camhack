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

<section class="sm:p-8 theme-bg-gradient">
    <Hero />
</section>

<section>
    <Sponsors />
</section>

<section class="px-0 md:p-4 mb-8">
    <div class="max-w-7xl mx-auto">
        <img class="w-full md:rounded-3xl" src="/cam-hack-theme.png" alt="Turning Sci-fi into reality">
    </div>
</section>

<section>
    <div class="max-w-7xl mx-auto">
        <a target="_blank" href="https://cam-hack-2024.devpost.com/project-gallery" class="text-violet-700 hover:text-violet-800 text-center">
            <h2>See the projects!</h2>
        </a>
    </div>
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

<section>
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
