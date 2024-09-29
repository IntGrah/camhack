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

    div.left, div.right {
        flex: 1;
    }

    @media (max-width: 600px) {
        div.container {
            flex-direction: column;
        }
    }
</style>
