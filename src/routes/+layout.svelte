<script lang="ts">
	import './layout.css';

	const { children } = $props();
</script>

<!-- <div class="flex h-full w-full justify-center py-10">
	<div class="flex h-full w-2xl flex-col items-center gap-16">
		{@render children()}
	</div>
</div> -->
<!-- Changed w-2xl to w-full max-w-2xl and added horizontal padding (px-4) so content doesn't hit the screen edges on mobile -->
<div class="flex min-h-screen w-full justify-center py-10 px-4">
	<div class="flex h-full w-full max-w-2xl flex-col items-center gap-16">
		{@render children()}
	</div>
</div>