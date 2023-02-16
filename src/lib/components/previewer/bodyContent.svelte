<script>
    export let ArticlesData;

</script>

<div class="body">
    {#await ArticlesData}
        <p>kkdjsl</p>
    {:then articles} 
        
    {#each articles as article}
        <div class="article-card" style="background:hsl({article.randomColor}, 71%, 68%) ;">
            <span class="categorie"><strong>{article.categorie}</strong></span>
            <span class="title">
                {@html article.title}
            </span>
            <div class="footer">
                <a href="/{article.id}" class="read-article-link">Lire</a>
                <span class="date">{article.date}</span>
            </div>
        </div>
    {/each}
    {/await}
    
    
</div>

<style>

    .body
    {
        width: 100%;
        height:auto;
        min-height:70vh;
        display: flex;
        flex-wrap:wrap;
        gap: 17px;
        padding: 1px 0;
        /* border: 1px solid; */
    }
    .article-card
    {
        width: 250px;
        height: 197px;
        padding:15px 8px;
        display: flex;
        flex-direction: column;
        gap: 7px;
        border-radius: 5px;
        box-shadow: 1px 5px 8px #83828286;
    }

    .categorie
    {
       font-size: 12px; 
       color:/*#ffffffd7*/#ffffffd2;
    }

    .title
    {
        width:95%;
        height:70%;
        font-size: 14px;
    }

    
    .footer
    {
        width: 100%;
        display:flex;
        justify-content: space-between;
        align-items:center;
    }

    .read-article-link
    {
        width:58px;
        display: inline;
        text-decoration: none;
        font-size: 14px;
        font-weight: bold;
        color:#1b4feb;
        padding: 5px 5px;
        background: #ffff;
        border-radius:3px;
        text-align: center;
        box-shadow: 0px 1px 17px #66656562;
    }

    a.read-article-link:hover
    {
        animation: name duration timing-function delay iteration-count direction fill-mode;
        animation: buttonAnimate 0.2s  ;
    }

    @keyframes buttonAnimate{
        from{
            transform: rotate(-10deg);
        }
        to{
            transform: rotate(10deg);
        }
    }
    .date
    {
        display:inline;
        font-size: 13px;
        font-weight:600;
        color:#fff/*#ffffffd7*/;
    }


    
</style>