<script>
    const FORM_URL =
        "https://docs.google.com/forms/d/e/1FAIpQLSePr4LUwzEhwY-D-ASlCcBHkJ2HjnIIwZ-RkO8SwND8ZpBlvQ/viewform";
</script>

<svelte:head>
    <title>Sign up &bull; Cam Hack 2024</title>
</svelte:head>

<section class="p-4 sm:px-8">
    <div class="max-w-7xl mx-auto">
        <h1 class="mb-4 text-4xl font-bold">Sign up</h1>
        <p class="mb-4">
            Not loading? Open the form directly <a
                target="_blank"
                href={FORM_URL}
                class="theme-hyperlink">here</a
            >.
        </p>
        <iframe
            title="Sign up form"
            src="{FORM_URL}?embedded=true"
            class="w-full h-[800px]"
            frameborder="0"
        >
        </iframe>
    </div>
</section>
