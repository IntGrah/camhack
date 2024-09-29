<script>
    import CUCaTS from "$lib/assets/cucats-logo-gradient-full.png";
    import JaneStreet from "$lib/assets/jane-street-logo.png";
    import EntrepreneurFirst from "$lib/assets/entrepreneur-first-logo.png";
    import HudsonRiverTrading from "$lib/assets/hudson-river-trading-logo.png";
</script>

<div class="container">
    <div class="left">
        <h3>Hosted by:</h3>
        <a href="https://cucats.org">
            <img class="cucats" src={CUCaTS} alt="CUCaTS" />
        </a>
    </div>
    <div class="right">
        <h3>Sponsored by:</h3>
        <a href="https://janestreet.com">
            <img class="jane-street" src={JaneStreet} alt="Jane Street" />
        </a>
        <a href="https://www.joinef.com/">
            <img class="ef" src={EntrepreneurFirst} alt="Entrepreneur First" />
        </a>
        <a href="https://www.hudsonrivertrading.com/">
            <img
                class="hrt"
                src={HudsonRiverTrading}
                alt="Hudson River Trading"
            />
        </a>
    </div>
</div>

<style>
    div.container {
        display: flex;
    }

    div.left,
    div.right {
        flex: 1;
        margin-bottom: 2rem;
    }

    @media (max-width: 600px) {
        div.container {
            flex-direction: column;
        }
    }

    h3 {
        font-size: 1.8rem;
        margin-bottom: 1rem;
    }

    img.cucats {
        max-width: 40%;
        height: auto;
    }

    img.jane-street {
        max-width: 80%;
        height: auto;
    }

    img.ef {
        max-width: 20%;
        height: auto;
    }

    img.hrt {
        max-width: 60%;
        height: auto;
    }
</style>
