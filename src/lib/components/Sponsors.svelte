<script>
    import CUCaTS from "$lib/assets/cucats-logo-gradient-full.png";
    import JaneStreet from "$lib/assets/jane-street-logo.png";
</script>

<div class="container">
    <div>
        <h3>In collaboration with:</h3>
        <a href="https://cucats.org">
            <img src={CUCaTS} alt="CUCaTS" />
        </a>
    </div>

    <div>
        <h3>Sponsored by:</h3>
        <a href="https://janestreet.com">
            <img src={JaneStreet} alt="Jane Street" />
        </a>
    </div>
</div>

<style>
    div.container {
        padding: 2rem;
        font-size: large;
    }

    h3 {
        font-size: 1.8rem;
        margin-bottom: 1rem;
    }

    img {
        max-width: 40%;
        height: auto;
    }
</style>
