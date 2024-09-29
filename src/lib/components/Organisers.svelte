<div class="container">
    <div class="left">
        <p>Jane Janet Doe</p>
        <p>John Joseph Smith</p>
        <p>Isaac Newton</p>
        <p>Ada Lovelace</p>
    </div>
    <div class="right">
        <p>Srinivasa Ramanujan</p>
        <p>Cleopatra Philopator</p>
        <p>Johann Sebastian Bach</p>
        <p>Marie Skłodowska&ndash;Curie</p>
    </div>
</div>

<style>
    div.container {
        display: flex;
    }

    @media (max-width: 600px) {
        div.container {
            flex-direction: column;
        }
    }

    div.left, div.right {
        flex: 1;
    }

    p {
        margin-bottom: 0.5rem;
    }
</style>
