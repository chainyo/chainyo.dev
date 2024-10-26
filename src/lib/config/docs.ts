import type { NavItem, SidebarNavItem } from "$lib/types/nav.js";

type DocsConfig = {
	mainNav: NavItem[];
	sidebarNav: SidebarNavItem[];
};

export const docsConfig: DocsConfig = {
	mainNav: [
		{
			title: "Documentation",
			href: "/docs",
		},
		{
			title: "Components",
			href: "/docs/components/accordion",
		},
		{
			title: "Themes",
			href: "/themes",
		},
		{
			title: "Examples",
			href: "/examples/dashboard",
		},
		{
			title: "Blocks",
			href: "/blocks",
		},
		{
			title: "Colors",
			href: "/colors",
		},
		{
			title: "GitHub",
			href: "https://github.com/huntabyte/shadcn-svelte",
			external: true,
		},
	],
	sidebarNav: [
		{
			title: "Module 1: Introduction to Open-Source",
			href: "/open-source/module/1/index",
			items: [
				{
					title: "What is Open-Source?",
					href: "/open-source/module/1/what-is-open-source",
					items: [],
				},
				{
					title: "Why Contribute to Open-Source?",
					href: "/open-source/module/1/why-contribute-to-open-source",
					items: [],
				},
				{
					title: "Understanding Open-Source Licenses",
					href: "/open-source/module/1/understanding-open-source-licenses",
					items: [],
				},
			],
		},
		{
			title: "Module 2: Setting Up for Success",
			href: "/open-source/module/2/index",
			items: [
				{
					title: "Prerequisites for Open-Source Contribution",
					href: "/open-source/module/2/prerequisites-for-open-source-contribution",
					items: [],
				},
				{
					title: "Setting Up Your Development Environment",
					href: "/open-source/module/2/setting-up-your-development-environment",
					items: [],
				},
				{
					title: "Understanding the Open-Source Workflow",
					href: "/open-source/module/2/understanding-the-open-source-workflow",
					items: [],
				},
			],
		},
		{
			title: "Module 3: Finding the Right Open-Source Projects",
			href: "/open-source/module/3/index",
			items: [
				{
					title: "What Makes a Good First Contribution Project?",
					href: "/open-source/module/3/what-makes-a-good-first-contribution-project",
					items: [],
				},
				{
					title: "Finding Projects That Match Your Skills and Interests",
					href: "/open-source/module/3/finding-projects-that-match-your-skills-and-interests",
					items: [],
				},
				{
					title: "Evaluating Community and Documentation Quality",
					href: "/open-source/module/3/evaluating-community-and-documentation-quality",
					items: [],
				},
			],
		},
		{
			title: "Module 4: Making Your First Contribution",
			href: "/open-source/module/4/index",
			items: [
				{
					title: "Choosing an Issue to Work On",
					href: "/open-source/module/4/choosing-an-issue-to-work-on",
					items: [],
				},
				{
					title: "Creating Your First Pull Request (PR)",
					href: "/open-source/module/4/creating-your-first-pull-request",
					items: [],
				},
				{
					title: "Responding to Feedback and Revising Your PR",
					href: "/open-source/module/4/responding-to-feedback-and-revising-your-pr",
					items: [],
				},
			],
		},
		{
			title: "Module 5: Deepening Your Involvement in Open-Source",
			href: "/open-source/module/5/index",
			items: [
				{
					title: "How to Become a Regular Contributor",
					href: "/open-source/module/5/how-to-become-a-regular-contributor",
					items: [],
				},
				{
					title: "Contributing Beyond Code: Documentation and Support",
					href: "/open-source/module/5/contributing-beyond-code-documentation-and-support",
					items: [],
				},
				{
					title: "Networking and Growing Your Open-Source Presence",
					href: "/open-source/module/5/networking-and-growing-your-open-source-presence",
					items: [],
				},
			],
		},
		{
			title: "Module 6: Building Your Own Open-Source Project",
			href: "/open-source/module/6/index",
			items: [
				{
					title: "Starting an Open-Source Project from Scratch",
					href: "/open-source/module/6/starting-an-open-source-project-from-scratch",
					items: [],
				},
				{
					title: "Promoting Your Project and Growing a Community",
					href: "/open-source/module/6/promoting-your-project-and-growing-a-community",
					items: [],
				},
				{
					title: "Next Steps: From Open-Source Contributor to Industry Leader",
					href: "/open-source/module/6/next-steps-from-open-source-contributor-to-industry-leader",
					items: [],
				},
			],
		},
		{
			title: "Extras",
			href: "/open-source/extras",
			items: [],
		}
	],
};

type Example = {
	name: string;
	href: string;
	label?: string;
	code: string;
};
export const examples: Example[] = [
	{
		name: "Mail",
		href: "/examples/mail",
		code: "https://github.com/huntabyte/shadcn-svelte/tree/main/sites/docs/src/routes/(app)/examples/mail",
	},
	{
		name: "Dashboard",
		href: "/examples/dashboard",
		code: "https://github.com/huntabyte/shadcn-svelte/tree/main/sites/docs/src/routes/(app)/examples/dashboard",
	},
	{
		name: "Cards",
		href: "/examples/cards",
		code: "https://github.com/huntabyte/shadcn-svelte/tree/main/sites/docs/src/routes/(app)/examples/cards",
	},
	{
		name: "Tasks",
		href: "/examples/tasks",
		code: "https://github.com/huntabyte/shadcn-svelte/tree/main/sites/docs/src/routes/(app)/examples/tasks",
	},
	{
		name: "Playground",
		href: "/examples/playground",
		code: "https://github.com/huntabyte/shadcn-svelte/tree/main/sites/docs/src/routes/(app)/examples/playground",
	},
	{
		name: "Forms",
		href: "/examples/forms",
		code: "https://github.com/huntabyte/shadcn-svelte/tree/main/sites/docs/src/routes/(app)/examples/forms",
	},
	{
		name: "Music",
		href: "/examples/music",
		code: "https://github.com/huntabyte/shadcn-svelte/tree/main/sites/docs/src/routes/(app)/examples/music",
	},
	{
		name: "Authentication",
		href: "/examples/authentication",
		code: "https://github.com/huntabyte/shadcn-svelte/tree/main/sites/docs/src/routes/(app)/examples/authentication",
	},
];