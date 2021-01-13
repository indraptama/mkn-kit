<script>

  const handleSubmit = async () => {
    console.log('await')
  }
</script>

<div class="uk-card uk-card-default uk-card-body">
  <form class="uk-form-stacked" on:submit={handleSubmit}>
    <div class="uk-margin">
      
      <div class="uk-form-controls">
        <input
          class="uk-input"
          id="form-stacked-text"
          type="text"
          placeholder="Email Anda" />
      </div>
    </div>
    <div class="uk-margin">
      <div class="uk-form-controls">
        <input
          class="uk-input"
          id="form-stacked-text"
          type="password"
          placeholder="Password" />
      </div>
    </div>
    <div class="uk-margin-medium-top">
      <button class="uk-button uk-button-primary uk-width-1-1">Masuk</button>
    </div>
  </form>
</div>
