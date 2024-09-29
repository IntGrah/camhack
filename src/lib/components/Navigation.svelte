<script>
    import Margin from "./Margin.svelte";
</script>

<header class="container">
    <Margin>
        <div class="navigation">
            <div class="left"></div>
            <div class="right">
                <nav>
                    <a href="#home">Home</a>
                    <a href="#sponsors">Sponsors</a>
                    <a href="#about">About</a>
                    <a href="#schedule">Schedule</a>
                    <a href="#rules">Rules</a>
                    <a href="#faq">FAQ</a>
                </nav>
            </div>
        </div>
    </Margin>
</header>

<style>
    header.container {
        background-color: #ffffff;
    }

    @media (max-width: 800px) {
        header {
            display: none;
        }
    }

    div.navigation {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1.6rem;
    }

    .left {
        display: flex;
        align-items: center;
    }

    .right {
        display: flex;
        align-items: center;
    }

    nav {
        display: flex;
        gap: 2rem;
    }

    nav a {
        font-size: larger;
        text-decoration: none;
        color: #000000;
        transition: color 0.3s;
    }

    nav a:hover {
        color: #555555;
    }
</style>
