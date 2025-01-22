<script lang="ts">
	import { SectionHeadline, Button } from '$components';

	let contactName = $state('Benoit');
	let contactMail = $state('benoit@me.com');
	let informationAboutProject = $state('what a project!');
	let isFormInavlid = $state(false);
	let isEmailSent = $state(false);
	let showErrorMessage = $state(false);
	let isLoading = $state(false);

	async function onSubmit(event: Event) {
		event.preventDefault();

		if (contactName && contactMail && informationAboutProject) {
			isLoading = true;
			const response = await fetch('/api/send-mail', {
				method: 'POST',
				body: JSON.stringify({ contactName, contactMail, informationAboutProject }),
				headers: { 'Content-Type': 'application/json' }
			});
			isLoading = false;
			if (response.ok) {
				isEmailSent = true;
			} else {
				showErrorMessage = true;
			}
		} else {
			isFormInavlid = true;
		}
	}

	$effect(() => {
		if (contactName || contactMail || informationAboutProject) {
			isFormInavlid = false;
		}
	});
</script>

<section class="mt-l">
	<SectionHeadline sectionName="contact-form">Let's talk</SectionHeadline>

	<div class="form-container default-margin mt-m">
		{#if isEmailSent}
			<div class="spinner-container">
				<h3>Thank you for getting in contact with me. I'll usually reply within 48 hours.</h3>
			</div>
		{:else if isLoading}
			<div class="spinner-container">
				<div class="spinner"></div>
                <h3>Sending off the contact form.</h3>
			</div>
		{:else if showErrorMessage}
			<h3>
				We seem to have a trouble with our server at the moment. please send me a email directly to <a
					class="link"
					href="mailto:benoitrobin@me.com">benoitrobin@me.com</a
				>
			</h3>
		{:else}
			<form>
				<input
					type="text"
					class="text-input mb-m"
					class:input-error={isFormInavlid && !Boolean(contactName.length)}
					placeholder="Your Name"
					bind:value={contactName}
				/>
				<input
					type="text"
					class="text-input mb-m"
					class:input-error={isFormInavlid && !Boolean(contactMail.length)}
					placeholder="Your Email"
					bind:value={contactMail}
				/>
				<textarea
					class:input-error={isFormInavlid && !Boolean(informationAboutProject.length)}
					name=""
					id=""
					placeholder="Tell me what's up!"
					bind:value={informationAboutProject}
				></textarea>
				<Button onclick={onSubmit}>Submit</Button>
			</form>
		{/if}

		<div class="form-text">
			<h3 class="bold mb-s">Talk to me about your project</h3>
			<p>
				I'm always excited to hear about new and innovative ideas! Whether you're in the early
				stages of planning or have a well-defined project, I'm here to help bring your vision to
				life. Feel free to drop me a message with some details about your project, and let's start a
				conversation about how we can work together. I look forward to connecting with you and
				discussing the possibilities. Talk to you soon!
			</p>
		</div>
	</div>
</section>

<style>
	section {
		padding-bottom: 140px;
	}

	.form-container {
		display: flex;
		justify-content: space-between;
	}

	.form-text {
		width: 39%;
	}

	form {
		width: 45%;
		display: flex;
		flex-direction: column;
		align-items: flex-start;
	}

	form * {
		font-size: 20px;
		font-family: 'Inter Tight', sans-serif;
		font-weight: 500;
		color: #000;
	}

	textarea,
	input {
		width: 100%;
		background-color: rgba(0, 0, 0, 0.035);
		border-radius: 8px;
		padding: 4px 12px;
		outline: none;
		border: none;
	}

	input {
		height: 48px;
	}

	textarea {
		height: 120px;
		margin-bottom: 40px;
	}

	textarea::placeholder,
	input::placeholder {
		font-size: 20px;
		font-weight: 400;
	}

	.input-error {
		background-color: rgba(223, 87, 87, 0.667);
	}

	.input-error::placeholder {
		color: #fff;
	}
	.spinner {
		border: 4px solid rgba(0, 0, 0, 0.1);
		border-left-color: #000;
		border-radius: 50%;
		width: 16px;
		height: 16px;
		display: block;
		margin-right: 8px;
		animation: spin 0.5s linear infinite;
	}

	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	.spinner-container {
		display: flex;
	}
</style>
