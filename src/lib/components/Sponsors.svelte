<script>
    // import CUCaTS from "$lib/assets/cucats-logo-gradient-full.png";
    import EntrepreneurFirst from "$lib/assets/entrepreneur-first-logo.png";
    import HudsonRiverTrading from "$lib/assets/hudson-river-trading-logo.png";
    import JaneStreet from "$lib/assets/jane-street-logo.png";
    import QubeRT from "$lib/assets/qube-rt-logo.png";
    import CUCaTS from "$lib/assets/cucats-logo-gradient-full.png";
    import CUAI from "$lib/assets/cuai-text-logo.png";
</script>

<div class="max-w-7xl mx-auto">
    <h2 class="text-center">Sponsored by</h2>
    <grid class="grid grid-cols-4 max-sm:grid-cols-2 text-center">
        <a class="inline-block" target="_blank" href="https://www.joinef.com">
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
            href="https://www.hudsonrivertrading.com"
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
        <a class="inline-block" target="_blank" href="https://www.qube-rt.com">
            <span class="inline-block h-full align-middle"></span>
            <img
                class="inline-block align-middle h-auto w-3/5"
                src={QubeRT}
                alt="Qube RT"
            />
        </a>
    </grid>
    <h2 class="text-center">Run by</h2>
    <div class="flex text-center">
        <a
            class="flex-1 inline-block"
            target="_blank"
            href="https://cucats.org"
        >
            <span class="inline-block h-full align-middle"></span>
            <img
                class="inline-block align-middle h-auto w-2/5 sm:w-1/4"
                src={CUCaTS}
                alt="Cambridge University Computing and Technology Society First"
            />
        </a>
        <a
            class="flex-1 inline-block"
            target="_blank"
            href="https://www.cuai.org.uk"
        >
            <span class="inline-block h-full align-middle"></span>
            <img
                class="inline-block align-middle h-auto w-3/5 sm:w-2/5"
                src={CUAI}
                alt="Cambridge University AI Society"
            />
        </a>
    </div>
</div>
