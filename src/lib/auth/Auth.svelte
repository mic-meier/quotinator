<script lang="ts">
	import SignIn from '$lib/auth/SignIn.svelte';
	import SignUp from '$lib/auth/SignUp.svelte';
	import { Dialog, DialogOverlay, DialogTitle } from '@rgossiaux/svelte-headlessui';
	let isOpen = false;
	let displayModal: string;

	function openModal(mode: string): void {
		isOpen = true;
		displayModal = mode;
	}
</script>

<div class="flex items-center justify-center h-screen">
	<Dialog open={isOpen} on:close={() => (isOpen = false)}>
		<div class="absolute inset-0 flex items-center justify-center min-h-screen">
			<DialogOverlay class="fixed inset-0 bg-gray-400 opacity-30" />
			<div class="relative flex flex-col bg-gray-100 rounded-md w-1/2 mx-auto p-8">
				<div class="mx-8">
					{#if displayModal === 'signup'}
						<DialogTitle class="p-2">Sign Up</DialogTitle>
						<SignUp />
					{:else if displayModal === 'signin'}
						<DialogTitle class="p-2">Sign In</DialogTitle>
						<SignIn />
					{/if}
				</div>
				<button
					on:click={() => (isOpen = false)}
					class="mx-10 my-2 p-2 border-2 rounded-md bg-red-500 text-white">Cancel</button
				>
			</div>
		</div>
	</Dialog>

	<div class="buttonContainer">
		<button on:click={() => openModal('signup')}>Sign Up</button>
		<button on:click={() => openModal('signin')}>Sign In</button>
	</div>
</div>

<style>
	.buttonContainer {
		display: grid;
		grid-template-columns: repeat(2, minmax(0, 1fr));
		gap: 0.75rem;
	}
</style>
