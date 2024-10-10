<script>
    import FAQuestion from "$lib/components/FAQuestion.svelte";
</script>

<div class="max-w-7xl mx-auto">
    <h2>FAQ</h2>
    <FAQuestion>
        <span slot="question">What is a hackathon?</span>
        A hackathon is an event where people collaborate to create new projects!
        It usually runs over a weekend and is a great way to learn new skills, meet
        new people, and have fun!
    </FAQuestion>
    <FAQuestion>
        <span slot="question">Can I participate online?</span>
        No, unfortunately Cam Hack 2024 is an in-person event. We hope to see you
        at the Computer Lab!
    </FAQuestion>
    <FAQuestion>
        <span slot="question">How much does it cost?</span>
        Entry is free and includes food, drinks, and of course, sta$h!
    </FAQuestion>
    <FAQuestion>
        <span slot="question">Where is it?</span>
        Cam Hack 2024 will be in the Computer Laboratory, also known as the
        <a
            href="https://maps.app.goo.gl/185n4bsvv7AXw3FM7"
            class="theme-hyperlink">William Gates Building</a
        >.
    </FAQuestion>
    <FAQuestion>
        <span slot="question">I don't have a team!</span>
        If you don't have a team yet, don't hesitate to look around in our
        <a target="_blank" class="theme-hyperlink" href="/discord"
            >Discord server</a
        >. It's also common to form teams at the event itself!
    </FAQuestion>
    <FAQuestion>
        <span slot="question">How do I sign up?</span>
        Fill out the
        <a href="/signup" class="theme-hyperlink"> sign up form </a> by 26 October!
    </FAQuestion>
    <FAQuestion>
        <span slot="question">I've never hacked before!</span>
        That's completely fine! Teams often have hackers with a mix of experience,
        including beginners.
    </FAQuestion>
    <FAQuestion>
        <span slot="question">Will there be food?</span>
        Yes! We will provide meals, as well as lots of snacks throughout the event!
        Please let us know if you have any dietary requirements in the sign up form.
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
        >! You can also email us at <a href="mailto:help@camhack.org" class="theme-hyperlink">help@camhack.org</a>, or speak to us in person at the event,
        where we will be happy to answer.
    </FAQuestion>
</div>
