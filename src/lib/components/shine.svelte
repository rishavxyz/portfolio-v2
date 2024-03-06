<script>
  import { Shine } from "svelte-ux"
  export let depth = 3;
  export let lightRadius = 250;
  export let lightColor = "#555";
</script>

<Shine {depth} {lightRadius} {lightColor}>
  <slot />
</Shine>
