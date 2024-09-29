<!-- This component is used to restrict content
 to the central 1200px of the page -->

<div class="container">
    <slot />
</div>

<style>
    div.container {
        max-width: 1200px;
        margin-left: auto;
        margin-right: auto;
    }
</style>
