<script>
	import { ModeWatcher } from 'mode-watcher';
	import { Toaster } from "$lib/components/ui/sonner";
	import '../app.css';
</script>

<Toaster theme="dark" class="z-50" />
<ModeWatcher defaultMode={'dark'} />

<div class="bg-background relative flex min-h-screen flex-col" id="page" data-vaul-drawer-wrapper>
	<slot />
</div>