<script>
  import {Shine } from "svelte-ux"
  export let depth = 3;
  export let lightRadius = 480;
  export let lightColor = "#666";
</script>

<Shine {depth} {lightRadius} {lightColor}>
  <slot />
</Shine>