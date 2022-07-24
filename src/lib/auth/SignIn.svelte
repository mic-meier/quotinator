<script lang="ts">
	import { supabase } from '$lib/supabaseClient';

	let loading = false;
	let email = '';
	let password = '';

	async function handleSignIn() {
		try {
			loading = true;
			const { error } = await supabase.auth.signIn({ email, password });
			if (error) throw error;
		} catch (error) {
			console.log(error);
		} finally {
			loading = false;
		}
	}
</script>

<form on:submit|preventDefault={handleSignIn}>
	<div class="flex flex-col">
		<div class="flex flex-col p-2">
			<label for="email" class="py-2"> Email </label>
			<input type="email" name="email" id="email" bind:value={email} class="p-2 rounded-md" />
		</div>
		<div class="flex flex-col p-2">
			<label for="password" class="py-2">Password</label>
			<input
				type="password"
				name="password"
				id="password"
				bind:value={password}
				class="p-2 rounded-md"
			/>
		</div>
		<button type="submit" class="m-2 p-2 border-2 rounded-md bg-blue-500 text-white">Login</button>
	</div>
</form>
