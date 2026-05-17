<script lang="ts">
	import './layout.css';

	const { children } = $props();
</script>

<div class="flex h-full w-full justify-center py-10">
	<div class="flex h-full w-2xl flex-col items-center gap-16">
		{@render children()}
	</div>
</div>
