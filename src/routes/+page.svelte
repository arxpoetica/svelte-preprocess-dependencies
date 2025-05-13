<script lang="ts">
	import './globals.css';
</script>

<main>
	<h1>Testing out Preprocess Dependencies</h1>
	<p>
		Note: if you save the contents of this +page.svelte file, it will update any changes in the
		dependency "sample-dependency.postcss" file.
	</p>
	<p>
		However, if you save the contents of "sample-dependency.postcss" file (a dependency), it will
		not update this file.
	</p>
</main>

<style>
	/* delete (or undelete) the following line and this file updates */
	/* but alter the comments of the `sample-dependency.postcss` and save...NO DICE */
	@dependency './sample-dependency.postcss';

	main {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100%;
		padding: 100rem;
	}
	h1 {
		margin: 0;
	}
</style>
