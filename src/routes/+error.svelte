<script>
    import { page } from "$app/stores";
</script>

<section class="px-8 py-4">
    <div class="max-w-7xl mx-auto">
        <h1 class="mb-8 text-4xl font-bold">
            {$page.status}: {$page.error?.message}
        </h1>
        <p class="text-xl">
            <a href="/">Click to return home</a>
        </p>
    </div>
</section>
