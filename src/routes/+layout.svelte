<script>
	import { ModeWatcher } from 'mode-watcher';
	import { Toaster } from "$lib/components/ui/sonner";
	import '../app.css';
</script>

<ModeWatcher defaultMode={'dark'} />
<Toaster theme="dark" position="top-center" />

<div class="bg-background relative flex min-h-screen flex-col" id="page" data-vaul-drawer-wrapper>
	<slot />
</div>