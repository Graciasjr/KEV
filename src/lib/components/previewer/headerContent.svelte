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
        height: 17vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 7px 0;
    }

    .title
    {
        display: block;
        width: auto;
        height: 7vh;
    }

    .description
    {
        color: #474747;
        width: 80%;
        height:10vh;
        /* border: 1px solid; */
    }

</style>