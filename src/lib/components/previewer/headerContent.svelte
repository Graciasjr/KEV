<script>
    export let title;
    export let description;
    
</script>

<div class="header">
    <h1 class="title">
        {title}.
    </h1>
    <div class="description">
        {description}
    </div>
</div>

<style>
    
    .header
    {
        /* background-color: #fff; */
        width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 5px 0;
        gap: 3px;
    }

    .title
    {
        display: block;
        width: auto;
        height: auto;
        padding: 5px 0;
    }

    .description
    {
        color: #474747;
        width: 80%;
        height:auto;
        padding: 7px 3px;
    }

</style>