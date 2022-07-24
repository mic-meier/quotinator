<script lang="ts">
	import { supabase } from '$lib/supabaseClient';

	async function handleSignOut() {
		const { error } = await supabase.auth.signOut();
	}
</script>

<button on:click={handleSignOut}> Sign Out </button>
