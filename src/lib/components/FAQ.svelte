<script>
    import FAQuestion from "$lib/components/FAQuestion.svelte";
</script>

<div class="max-w-7xl mx-auto">
    <h2 class="mb-4 text-4xl font-bold">FAQ</h2>
    <FAQuestion>
        <span slot="question">What is a hackathon?</span>
        A hackathon is an event where people collaborate to make cool stuff! It usually
        runs over a weekend and is a great way to learn new skills, meet new people,
        and have fun!
    </FAQuestion>
    <FAQuestion>
        <span slot="question">Can I participate online?</span>
        No, unfortunately Cam Hack 2024 is an in-person event. We hope to see you
        at the Computer Lab!
    </FAQuestion>
    <FAQuestion>
        <span slot="question">Where is it?</span>
        Cam Hack 2024 will be in the Computer Laboratory, which is at the
        <a
            href="https://maps.app.goo.gl/185n4bsvv7AXw3FM7"
            class="theme-hyperlink"
            >William Gates Building, 15 JJ Thomson Avenue, CB3 0FD</a
        >.
    </FAQuestion>
    <FAQuestion>
        <span slot="question">What teams are allowed?</span>
        Team sizes can be up to 5 people. Any bigger, and we may have to split you
        into smaller groups. If you don't have a team yet, don't hesitate to look
        around in our
        <a target="_blank" class="theme-hyperlink" href="/discord"
            >Discord server</a
        >!
    </FAQuestion>
    <FAQuestion>
        <span slot="question">How do I sign up?</span>
        Fill out the
        <a href="/signup" class="theme-hyperlink"> sign up form </a> by TODO!
    </FAQuestion>
    <FAQuestion>
        <span slot="question">I've never hacked before!</span>
        TODO Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptate
        vel exercitationem dignissimos ullam magnam, quisquam nobis sed voluptatem
        similique laboriosam, nostrum perspiciatis nisi! Magni quaerat ipsum vitae
        natus rem!
    </FAQuestion>
    <FAQuestion>
        <span slot="question">What prizes are there?</span>
        TODO Lorem ipsum dolor sit amet consectetur adipisicing elit. A voluptate
        vel exercitationem dignissimos ullam magnam, quisquam nobis sed voluptatem
        similique laboriosam, nostrum perspiciatis nisi! Magni quaerat ipsum vitae
        natus rem!
    </FAQuestion>
    <FAQuestion>
        <span slot="question">Will there be food?</span>
        Yes! We will provide meals throughout the event, as well as lots of snacks!
        Please let us know if you have any dietary requirements in the sign up form.
        TODO
    </FAQuestion>
    <FAQuestion>
        <span slot="question">Can I submit to multiple tracks?</span>
        Yes, but each project can only be submitted to one track.
    </FAQuestion>
    <FAQuestion>
        <span slot="question">You didn't answer my questions!</span>
        You can ask us anything in our
        <a target="_blank" href="/discord" class="theme-hyperlink"
            >Discord server</a
        >! You can also email us at TODO, or speak to us in person at the event,
        where we will be happy to answer.
    </FAQuestion>
</div>
