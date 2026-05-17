<script>
  // MDsveX passes all frontmatter keys down as exports
  let { title, children } = $props();
</script>

<main class="max-w-2xl mx-auto px-4 py-10">
  <!-- The prose class will now be recognized by Tailwind v4 -->
  <article class="prose mx-auto">
    <header class="mb-6">
      <h1>{title}</h1>
    </header>

    <!-- Render markdown directly into the prose container -->
    {@render children()}
  </article>
</main>