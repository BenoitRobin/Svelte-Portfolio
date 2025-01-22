<script lang="ts">
	import type { Snippet } from 'svelte';

	interface ButtonProps {
		children: Snippet;
		onclick: ((e: MouseEvent) => void) | (() => void);
		className?: string;
	}
	let { children, className, ...props }: ButtonProps = $props();
</script>

<button class={`btn ${className}`} {...props}>
	{@render children()}
</button>

<style>
	.btn {
		font-family: 'Inner Tight', sans-serif;
		font-weight: 500;
		background-color: #000;
		color: #fff;
		font-size: 24px;
		border-radius: 10px;
		padding: 14px 40px;
	}

	.btn:hover {
		background-color: #fff;
		color: #000;
		border: 1px solid #000;
	}
	.nav-bar {
		padding: 10px 24px;
		font-size: 20px;
	}
</style>
