<script>
    export let ArticlesData;

</script>

<div class="body">
    {#await ArticlesData}
        <p>kkdjsl</p>
    {:then articles} 
        
    {#each articles as article}

        <div class="article-card">
            <span class="categorie">{article.categorie}</span>
            <span class="title">
                <h1>{article.title}</h1>
            </span>
            <div class="footer">
                <a href="/{article.articleNature}/{article.id}" class="read-article-link">Lire</a>
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
    }
    .article-card
    {
        /* border: 1px solid; */
        width: 250px;
        height: 197px;
        padding:15px 8px;
        display: flex;
        flex-direction: column;
        background-color:hsla(199, 66%, 47%, 0.61);
        border-radius: 5px;
        box-shadow: 1px 5px 7px #83828286;
    }

    .categorie
    {
       font-size: 12px; 
       color:#ffffffd7;
    }

    .title
    {
        width: 70%;
        height:70%;
        font-size: 16px;
        margin-top: 2px;
        margin-bottom:22px;
        /* color: #fff; */
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
        /* color: ; */
        padding: 5px 5px;
        background: #fff;
        border-radius:3px;
        text-align: center;
        box-shadow: 0px 1px 17px #66656562;
    }

    a.read-article-link:hover
    {
        transform: scale(1.01);
        transition: transform 0.3s ease-out;
    }

    .date
    {
        display:inline;
        font-size: 13px;
        font-weight:600;
        color:#ffffffd7;
    }


    
</style>