<div class="container">
    <div class="left">
        <h3>Day 1</h3>
        <ul>
            <li>Interesting stuff</li>
            <li>More interesting stuff</li>
            <li>Stuff is happening</li>
        </ul>
    </div>
    <div class="middle">
        <h3>Day 2</h3>
        <ul>
            <li>Interesting stuff</li>
            <li>More interesting stuff</li>
        </ul>
    </div>
    <div class="right">
        <h3>Day 3</h3>
        <ul>
            <li>Interesting stuff</li>
            <li>More interesting stuff</li>
            <li>Yet more interesting stuff</li>
        </ul>
    </div>
</div>

<style>
    div.container {
        display: flex;
    }

    div.left,
    div.middle,
    div.right {
        flex: 1;
        margin-bottom: 1rem;
    }

    @media (max-width: 800px) {
        div.container {
            flex-direction: column;
        }
    }

    ul {
        padding: 0;
    }

    li {
        list-style-type: none;
        margin-bottom: 0.5rem;
    }
</style>
