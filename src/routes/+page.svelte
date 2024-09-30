<script>
    import FAQuestion from "$lib/components/FAQuestion.svelte";
    import Footer from "$lib/components/Footer.svelte";
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
        <div class="max-w-1200px">
            <Sponsors />
        </div>
    </div>

    <div id="about" class="section">
        <div class="max-w-1200px">
            <h2>About</h2>
            <p>
                Cam Hack is a hackathon. This means you need to hack. Lorem
                ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate
                voluptatem inventore dignissimos sint repellat optio nam at in
                ea, quisquam placeat iure eos, molestias laborum quam labore
                sequi ipsam distinctio?
            </p>
            <p>
                Qui enim eum asperiores aut, architecto, repudiandae nulla ullam
                quis aliquam error sit voluptas assumenda ipsam rerum cumque.
                Blanditiis minima nemo nisi? Lorem ipsum dolor sit amet
                consectetur adipisicing elit.
            </p>
        </div>
    </div>

    <div id="schedule" class="section">
        <div class="max-w-1200px">
            <h2>Schedule</h2>
            <Schedule />
        </div>
    </div>

    <div id="rules" class="section">
        <div class="max-w-1200px">
            <h2>Rules</h2>
            <h3>Entry rules</h3>
            <ul>
                <li>
                    Ipsa mollitia, commodi sint vitae facere veniam adipisci
                    autem dolorum totam et nemo iure unde a sequi quis
                    aspernatur deserunt minus provident.
                </li>
                <li>
                    Quo dolorem doloremque eligendi error deserunt dolore eius
                    ratione ex sit quod repudiandae, cum beatae. Est, dolores
                    quaerat? Esse earum fugit veritatis?
                </li>
                <li>
                    Fuga doloremque repudiandae maiores esse consectetur
                    aliquam. Maiores et impedit, perspiciatis fugit molestias
                    sint earum quasi saepe ut a ex voluptas dolore.
                </li>
            </ul>
            <h3>Submission rules</h3>
            <ul>
                <li>
                    Impedit veniam molestiae ipsum repudiandae, voluptatibus et
                    minus ipsa quasi ad! Placeat alias nobis aperiam illum
                    ratione voluptatem rem vitae libero assumenda.
                </li>
                <li>
                    Laborum atque quos magnam alias molestias beatae
                    consequuntur ipsum sed voluptates cupiditate? Corrupti
                    officia labore dolor enim quam esse tempora eum quod.
                </li>
                <li>
                    Accusamus eius, facilis quo incidunt dolorem eveniet nostrum
                    obcaecati molestias possimus ab.
                </li>
                <li>
                    Asperiores facilis, neque ea adipisci necessitatibus enim
                    dicta, fuga optio iusto deleniti id! Architecto ipsam sed
                    doloribus totam aliquam tempora suscipit deleniti.
                </li>
            </ul>
        </div>
    </div>

    <div id="faq" class="section">
        <div class="max-w-1200px">
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
        </div>
    </div>

    <div class="section">
        <!-- Not linked in navigation -->
        <div class="max-w-1200px">
            <h2>Organising Committee</h2>
            <Organisers />
        </div>
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

    p {
        margin-bottom: 1rem;
    }

    h2 {
        font-size: 2rem;
    }

    h3 {
        font-size: 1.5rem;
    }

    li {
        margin-bottom: 1rem;
    }
</style>
