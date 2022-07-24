<script lang="ts">
	import { supabase } from './supabaseClient';

	async function signOut() {
		const { error } = await supabase.auth.signOut();
	}
</script>

<div>
	<div>Logged in</div>
	<button on:click={signOut}>Sign Out</button>
</div>
