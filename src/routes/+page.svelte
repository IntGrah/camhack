<script>
    import FAQuestion from "$lib/components/FAQuestion.svelte";
    import Footer from "$lib/components/Footer.svelte";
    import Margin from "$lib/components/Margin.svelte";
    import Header from "$lib/components/Header.svelte";
    import Organisers from "$lib/components/Organisers.svelte";
    import Sponsors from "$lib/components/Sponsors.svelte";
    import Welcome from "$lib/components/Welcome.svelte";
    import Schedule from "$lib/components/Schedule.svelte";
</script>

<Header />

<div id="home"></div>
<!-- For navigation via /#home -->
<Welcome />

<main>
    <div id="sponsors" class="section">
        <Margin>
            <Sponsors />
        </Margin>
    </div>

    <div id="about" class="section">
        <Margin>
            <h2>About</h2>
            <p>
                Cam Hack is a hackathon. Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Cupiditate voluptatem inventore dignissimos
                sint repellat optio nam at in ea, quisquam placeat iure eos,
                molestias laborum quam labore sequi ipsam distinctio?
            </p>
        </Margin>
    </div>

    <div id="schedule" class="section">
        <Margin>
            <h2>Schedule</h2>
            <Schedule />
        </Margin>
    </div>

    <div id="rules" class="section">
        <Margin>
            <h2>Rules</h2>
            <h3>Entry rules</h3>
            <ul>
                <li>Rule 1</li>
                <li>Rule 2</li>
                <li>Rule 3</li>
            </ul>
            <h3>Submission rules</h3>
            <ul>
                <li>Rule 1</li>
                <li>Rule 2</li>
                <li>Rule 3</li>
            </ul>
        </Margin>
    </div>

    <div id="faq" class="section">
        <Margin>
            <h2>FAQ</h2>
            <FAQuestion>
                <span slot="question">What is a hackathon?</span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
                assumenda ducimus debitis reiciendis dolore dolores quae dolorum
                eius? Tempora nemo beatae quisquam error vel. Voluptatem laborum
                ad excepturi rem porro?
            </FAQuestion>
            <FAQuestion>
                <span slot="question">What teams are allowed?</span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
                assumenda ducimus debitis reiciendis dolore dolores quae dolorum
                eius? Tempora nemo beatae quisquam error vel. Voluptatem laborum
                ad excepturi rem porro?
            </FAQuestion>
            <FAQuestion>
                <span slot="question">How do I sign up?</span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi eum
                unde soluta dolore eveniet atque dolor, necessitatibus rerum assumenda,
                tempora ullam reprehenderit culpa adipisci, alias similique. Aliquam,
                quae. Distinctio, maxime.
            </FAQuestion>
            <FAQuestion>
                <span slot="question">What is the prize?</span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptate
                vel exercitationem dignissimos ullam magnam, quisquam nobis sed voluptatem
                similique laboriosam, nostrum perspiciatis nisi! Magni quaerat ipsum
                vitae natus rem!
            </FAQuestion>
            <FAQuestion>
                <span slot="question">Bggrl barg plob!?</span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptate
                vel exercitationem dignissimos ullam magnam, quisquam nobis sed voluptatem
                similique laboriosam, nostrum perspiciatis nisi! Magni quaerat ipsum
                vitae natus rem!
            </FAQuestion>
            <FAQuestion>
                <span slot="question">You didn't answer my questions!</span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
                facere error sunt quas ratione obcaecati vel perspiciatis debitis
                quos. Dolores quo quae fuga accusamus culpa illo earum cupiditate
                eaque tempore?
            </FAQuestion>
        </Margin>
    </div>

    <div class="section">
        <!-- Not linked in navigation -->
        <Margin>
            <h2>Organising Committee</h2>
            <Organisers />
        </Margin>
    </div>
</main>

<Footer />

<style>
    div.section {
        padding: 2rem;
        font-size: large;
    }

    div.section:nth-child(odd) {
        background-color: #fafafa;
    }

    div.section:nth-child(even) {
        background-color: #ffffff;
    }

    h2 {
        font-size: 2rem;
    }

    li {
        margin-bottom: 1rem;
    }
</style>
