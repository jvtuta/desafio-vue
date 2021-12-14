<template>
  <div class="url">
    <a @click.prevent="window.open(url.url_completa)">{{ url.url_encurtada }}</a>
  </div>
</template>

<script>
export default {
    props: {
        url: {
            type: Object,
        }
    }
    
}
</script>

<style>

</style>