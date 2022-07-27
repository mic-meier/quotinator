<script lang="ts">
	import Auth from '$lib/auth/Auth.svelte';
	import { quotes, user } from '$lib/sessionStore';
	import { supabase } from '$lib/supabaseClient';
	import type { Quote } from '@src/lib/types';
	import '../app.css';

	user.set(supabase.auth.user());

	supabase.auth.onAuthStateChange((_, session) => {
		user.set(session?.user);
		if (session?.user) {
			console.log($user);
			// get quotes here
		}
		getQuotes();
	});

	getQuotes();

	async function getQuotes() {
		const { data, error } = await supabase.from<Quote>('quotes').select();
		quotes.set(data);
		console.log('quotes', $quotes);
	}

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
