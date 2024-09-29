<script>
    import Margin from "./Margin.svelte";
</script>

<footer class="container">
    <Margin>
        <div class="stuff">
            <h3>Stuff</h3>
            Email, credits, et cetera
        </div>

        <p class="copyright">ⓒ Cam Hack 2024</p>
    </Margin>
</footer>

<style>
    footer.container {
        background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
        padding: 2rem;
    }

    div.stuff {
        margin-bottom: 2rem;
    }

    p.copyright {
        font-family: monospace;
        color: #444444;
    }
</style>
