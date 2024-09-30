<header class="container">
    <div class="max-w-1200px">
        <div class="content">
            <div class="left">
                <img class="camhack-logo" src="https://placehold.co/80x60" alt="Cam Hack Logo" />
                <span class="camhack-text">Cam Hack 2024</span>
            </div>
            <nav class="right">
                <a href="#home">Home</a>
                <!-- <a href="#sponsors">Sponsors</a> -->
                <a href="#about">About</a>
                <a href="#schedule">Schedule</a>
                <a href="#rules">Rules</a>
                <a href="#faq">FAQ</a>
            </nav>
        </div>
    </div>
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

    div.content {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }

    div.left {
        display: flex;
        align-items: center;
        padding-left: 1.6rem;
    }

    img.camhack-logo {
        width: 80px;
        height: 60px;
    }

    span.camhack-text {
        font-size: 1.6rem;
        font-weight: bolder;
        margin-left: 1rem;
    }

    nav.right {
        display: flex;
        align-items: center;
        padding: 1.6rem;
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
