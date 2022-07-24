<script lang="ts">
	import Auth from '$lib/auth/Auth.svelte';
	import { user } from '$lib/sessionStore';
	import { supabase } from '$lib/supabaseClient';
	import '../app.css';

	user.set(supabase.auth.user());

	supabase.auth.onAuthStateChange((_, session) => {
		user.set(session?.user);
		if (session?.user) {
			console.log($user);
			// get quotes here
		}
	});

	async function signOut() {
		supabase.auth.signOut();
	}
</script>

<div class="container mx-auto max-w-lg">
	{#if !$user}
		<Auth />
	{:else}
		<slot />
		<button on:click={signOut}>Sign Out</button>
	{/if}
</div>
