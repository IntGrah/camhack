<script>
    // import CUCaTS from "$lib/assets/cucats-logo-gradient-full.png";
    import EntrepreneurFirst from "$lib/assets/entrepreneur-first-logo.png";
    import HudsonRiverTrading from "$lib/assets/hudson-river-trading-logo.png";
    import JaneStreet from "$lib/assets/jane-street-logo.png";
    import QubeRT from "$lib/assets/qube-rt-logo.png";
</script>

<div class="max-w-7xl mx-auto">
    <h2 class="text-center">Sponsored by</h2>
    <grid class="grid grid-cols-4 max-sm:grid-cols-2 text-center text-[0]">
        <a class="inline-block" target="_blank" href="https://www.joinef.com/">
            <span class="inline-block h-full align-middle"></span>
            <img
                class="inline-block align-middle h-auto w-2/5"
                src={EntrepreneurFirst}
                alt="Entrepreneur First"
            />
        </a>
        <a
            class="inline-block"
            target="_blank"
            href="https://www.hudsonrivertrading.com/"
        >
            <span class="inline-block h-full align-middle"></span>
            <img
                class="inline-block align-middle h-auto w-11/12"
                src={HudsonRiverTrading}
                alt="Hudson River Trading"
            />
        </a>
        <a class="inline-block" target="_blank" href="https://janestreet.com">
            <span class="inline-block h-full align-middle"></span>
            <img
                class="inline-block align-middle h-auto w-11/12"
                src={JaneStreet}
                alt="Jane Street"
            />
        </a>
        <a class="inline-block" target="_blank" href="https://www.qube-rt.com/">
            <span class="inline-block h-full align-middle"></span>
            <img
                class="inline-block align-middle h-auto w-3/5"
                src={QubeRT}
                alt="Qube RT"
            />
        </a>
    </grid>
</div>
