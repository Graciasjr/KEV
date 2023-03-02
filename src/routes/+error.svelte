<script>
    import {page} from '$app/stores'
</script>

<h1>{$page.status}:{$page.Error}</h1>
{#if $page.status===500}
    <p><strong>Erreur Serveur</strong>, veuillez recharger la page </p>    
{/if}