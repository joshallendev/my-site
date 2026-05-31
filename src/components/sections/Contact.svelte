<script lang="ts">
	import SectionHeader from '../SectionHeader.svelte';

	let status: 'idle' | 'submitting' | 'success' | 'error' = 'idle';

	const handleSubmit = async (event: SubmitEvent) => {
		event.preventDefault();
		status = 'submitting';

		const form = event.currentTarget as HTMLFormElement;
		const formData = new FormData(form);
		const body = new URLSearchParams();

		formData.forEach((value, key) => {
			if (typeof value === 'string') {
				body.append(key, value);
			}
		});

		try {
			const response = await fetch('/', {
				method: 'POST',
				headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
				body: body.toString()
			});

			if (!response.ok) {
				throw new Error(`Form submission failed with status ${response.status}`);
			}

			form.reset();
			status = 'success';
		} catch (error) {
			console.error('Contact form submission failed', error);
			status = 'error';
		}
	};
</script>

<section id="contact" class="section">
	<div class="content-frame contact-grid">
		<div>
			<SectionHeader title="CONTACT" />
			<h2>Want to build something useful?</h2>
			<p class="body-copy">I'd love to help you shape it, simplify it, and get it working well.</p>
		</div>
		<div class="form-shell">
			<form
				method="POST"
				data-netlify="true"
				on:submit={handleSubmit}
				id="contact-form"
				name="contact"
				data-netlify-honeypot="bot-field"
			>
				<p class="honeypot">
					<label>
						Might be a trick who knows <input name="bot-field" />
					</label>
				</p>
				<div class="field">
					<label for="name">Name</label>
					<input required type="text" id="name" name="name" />
				</div>
				<div class="field">
					<label for="email">Email</label>
					<input required type="email" id="email" name="email" />
				</div>
				<div class="field">
					<label for="message">Message</label>
					<textarea required id="message" name="message"></textarea>
				</div>
				<button disabled={status === 'submitting'} type="submit">
					{status === 'submitting' ? 'Sending...' : 'Send message'}
				</button>
				{#if status === 'success'}
					<p class="form-status success">Thanks! Your message was sent.</p>
				{:else if status === 'error'}
					<p class="form-status error">Something went wrong. Please try again.</p>
				{/if}
				<input type="hidden" name="form-name" value="contact" />
			</form>
		</div>
	</div>
</section>

<style>
	.contact-grid {
		display: grid;
		grid-template-columns: minmax(0, 0.9fr) minmax(0, 1.1fr);
		gap: clamp(2rem, 6vw, 5rem);
		align-items: start;
	}

	h2 {
		margin: 0 0 1rem;
		color: var(--text);
		font-size: clamp(2.2rem, 5vw, 4.2rem);
		font-weight: 800;
		letter-spacing: 0;
		line-height: 1.02;
	}

	.body-copy {
		margin-bottom: 1.5rem;
	}

	.form-shell {
		border: 1px solid var(--border);
		border-radius: 8px;
		background: var(--surface);
		box-shadow: var(--shadow);
		padding: clamp(1.25rem, 4vw, 2rem);
	}

	form {
		display: grid;
		gap: 1rem;
	}

	.honeypot {
		display: none;
	}

	.field {
		display: grid;
		gap: 0.4rem;
	}

	label {
		color: var(--muted);
		font-size: 0.9rem;
		font-weight: 800;
	}

	input,
	textarea {
		width: 100%;
		border: 1px solid var(--border);
		border-radius: 8px;
		background: var(--bg);
		color: var(--text);
		font: inherit;
		outline: none;
		padding: 0.85rem 0.95rem;
		transition:
			border-color 160ms ease,
			box-shadow 160ms ease;
	}

	textarea {
		min-height: 9rem;
		resize: vertical;
	}

	input:focus,
	textarea:focus {
		border-color: var(--accent);
		box-shadow: 0 0 0 3px color-mix(in srgb, var(--accent) 22%, transparent);
	}

	button {
		justify-self: start;
		border: 0;
		border-radius: 999px;
		background: var(--text);
		color: var(--bg);
		cursor: pointer;
		font: inherit;
		font-weight: 800;
		padding: 0.9rem 1.25rem;
		transition:
			opacity 160ms ease,
			transform 160ms ease;
	}

	button:hover {
		transform: translateY(-1px);
	}

	button:disabled {
		cursor: not-allowed;
		opacity: 0.6;
		transform: none;
	}

	.form-status {
		margin: 0;
		font-weight: 800;
	}

	.success {
		color: var(--accent-strong);
	}

	.error {
		color: #b64a4a;
	}

	@media (max-width: 820px) {
		.contact-grid {
			grid-template-columns: 1fr;
		}
	}
</style>
