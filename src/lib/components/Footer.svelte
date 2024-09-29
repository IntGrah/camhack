<script>
    import Margin from "./Margin.svelte";
</script>

<footer class="container">
    <Margin>
        <div class="sections">
            <div class="first">
                <h3>First</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div class="second">
                <h3>Second</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
        </div>

        <p class="copyright">ⓒ Cam Hack 2024</p>
    </Margin>
</footer>

<style>
    footer.container {
        background-image: linear-gradient(120deg, #f6d365 0%, #fda085 100%);
        padding: 2rem;
    }

    div.sections {
        display: flex;
        justify-content: space-between;
        gap: 2rem;
        margin-bottom: 2rem;
    }

    @media (max-width: 600px) {
        div.sections {
            flex-direction: column;
        }
    }

    p.copyright {
        font-family: monospace;
        color: #444444;
    }
</style>
