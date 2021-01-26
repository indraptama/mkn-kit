<script>
  import loggedIn$ from '../store/userStore';
  const user = loggedIn$;
  
</script>

<div class="uk-container uk-container-xlarge uk-margin-top-medium">

  {#if $user}
    <p class="uk-text-lead">
      Hallo, <br> {$user.displayName}
    </p>
  {/if}

</div>