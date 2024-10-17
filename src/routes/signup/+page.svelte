<script>
    const FORM_URL =
        "https://docs.google.com/forms/d/e/1FAIpQLScyyLCcd9LJAo_x2Ly0jvNgAI6-dqp3AmKYoFbca5mxLVvtCQ/viewform";
</script>

<svelte:head>
    <title>Sign up &bull; Cam Hack 2024</title>
</svelte:head>

<section>
    <div class="max-w-7xl mx-auto">
        <h2>Sign up</h2>
        <p>The deadline for signing up is 23:59 24th October!</p>
        <p>
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
