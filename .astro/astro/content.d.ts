declare module 'astro:content' {
	interface Render {
		'.mdx': Promise<{
			Content: import('astro').MarkdownInstance<{}>['Content'];
			headings: import('astro').MarkdownHeading[];
			remarkPluginFrontmatter: Record<string, any>;
		}>;
	}
}

declare module 'astro:content' {
	interface RenderResult {
		Content: import('astro/runtime/server/index.js').AstroComponentFactory;
		headings: import('astro').MarkdownHeading[];
		remarkPluginFrontmatter: Record<string, any>;
	}
	interface Render {
		'.md': Promise<RenderResult>;
	}

	export interface RenderedContent {
		html: string;
		metadata?: {
			imagePaths: Array<string>;
			[key: string]: unknown;
		};
	}
}

declare module 'astro:content' {
	type Flatten<T> = T extends { [K: string]: infer U } ? U : never;

	export type CollectionKey = keyof AnyEntryMap;
	export type CollectionEntry<C extends CollectionKey> = Flatten<AnyEntryMap[C]>;

	export type ContentCollectionKey = keyof ContentEntryMap;
	export type DataCollectionKey = keyof DataEntryMap;

	type AllValuesOf<T> = T extends any ? T[keyof T] : never;
	type ValidContentEntrySlug<C extends keyof ContentEntryMap> = AllValuesOf<
		ContentEntryMap[C]
	>['slug'];

	/** @deprecated Use `getEntry` instead. */
	export function getEntryBySlug<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		// Note that this has to accept a regular string too, for SSR
		entrySlug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;

	/** @deprecated Use `getEntry` instead. */
	export function getDataEntryById<C extends keyof DataEntryMap, E extends keyof DataEntryMap[C]>(
		collection: C,
		entryId: E,
	): Promise<CollectionEntry<C>>;

	export function getCollection<C extends keyof AnyEntryMap, E extends CollectionEntry<C>>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => entry is E,
	): Promise<E[]>;
	export function getCollection<C extends keyof AnyEntryMap>(
		collection: C,
		filter?: (entry: CollectionEntry<C>) => unknown,
	): Promise<CollectionEntry<C>[]>;

	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(entry: {
		collection: C;
		slug: E;
	}): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(entry: {
		collection: C;
		id: E;
	}): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof ContentEntryMap,
		E extends ValidContentEntrySlug<C> | (string & {}),
	>(
		collection: C,
		slug: E,
	): E extends ValidContentEntrySlug<C>
		? Promise<CollectionEntry<C>>
		: Promise<CollectionEntry<C> | undefined>;
	export function getEntry<
		C extends keyof DataEntryMap,
		E extends keyof DataEntryMap[C] | (string & {}),
	>(
		collection: C,
		id: E,
	): E extends keyof DataEntryMap[C]
		? Promise<DataEntryMap[C][E]>
		: Promise<CollectionEntry<C> | undefined>;

	/** Resolve an array of entry references from the same collection */
	export function getEntries<C extends keyof ContentEntryMap>(
		entries: {
			collection: C;
			slug: ValidContentEntrySlug<C>;
		}[],
	): Promise<CollectionEntry<C>[]>;
	export function getEntries<C extends keyof DataEntryMap>(
		entries: {
			collection: C;
			id: keyof DataEntryMap[C];
		}[],
	): Promise<CollectionEntry<C>[]>;

	export function render<C extends keyof AnyEntryMap>(
		entry: AnyEntryMap[C][string],
	): Promise<RenderResult>;

	export function reference<C extends keyof AnyEntryMap>(
		collection: C,
	): import('astro/zod').ZodEffects<
		import('astro/zod').ZodString,
		C extends keyof ContentEntryMap
			? {
					collection: C;
					slug: ValidContentEntrySlug<C>;
				}
			: {
					collection: C;
					id: keyof DataEntryMap[C];
				}
	>;
	// Allow generic `string` to avoid excessive type errors in the config
	// if `dev` is not running to update as you edit.
	// Invalid collection names will be caught at build time.
	export function reference<C extends string>(
		collection: C,
	): import('astro/zod').ZodEffects<import('astro/zod').ZodString, never>;

	type ReturnTypeOrOriginal<T> = T extends (...args: any[]) => infer R ? R : T;
	type InferEntrySchema<C extends keyof AnyEntryMap> = import('astro/zod').infer<
		ReturnTypeOrOriginal<Required<ContentConfig['collections'][C]>['schema']>
	>;

	type ContentEntryMap = {
		"demos": {
"3d-in-css-is-not-real/3d-in-css-is-not-real.md": {
	id: "3d-in-css-is-not-real/3d-in-css-is-not-real.md";
  slug: "3d-in-css-is-not-real/3d-in-css-is-not-real";
  body: string;
  collection: "demos";
  data: InferEntrySchema<"demos">
} & { render(): Render[".md"] };
"3d-pencil/3d-pencil.md": {
	id: "3d-pencil/3d-pencil.md";
  slug: "3d-pencil/3d-pencil";
  body: string;
  collection: "demos";
  data: InferEntrySchema<"demos">
} & { render(): Render[".md"] };
"3d-rainbow-tube/3d-rainbow-tube.md": {
	id: "3d-rainbow-tube/3d-rainbow-tube.md";
  slug: "3d-rainbow-tube/3d-rainbow-tube";
  body: string;
  collection: "demos";
  data: InferEntrySchema<"demos">
} & { render(): Render[".md"] };
"css-noodle/css-noodle.md": {
	id: "css-noodle/css-noodle.md";
  slug: "css-noodle/css-noodle";
  body: string;
  collection: "demos";
  data: InferEntrySchema<"demos">
} & { render(): Render[".md"] };
"lemons/lemons.md": {
	id: "lemons/lemons.md";
  slug: "lemons/lemons";
  body: string;
  collection: "demos";
  data: InferEntrySchema<"demos">
} & { render(): Render[".md"] };
"mosquito/mosquito.md": {
	id: "mosquito/mosquito.md";
  slug: "mosquito/mosquito";
  body: string;
  collection: "demos";
  data: InferEntrySchema<"demos">
} & { render(): Render[".md"] };
"plastic-css-icons/plastic-css-icons.md": {
	id: "plastic-css-icons/plastic-css-icons.md";
  slug: "plastic-css-icons/plastic-css-icons";
  body: string;
  collection: "demos";
  data: InferEntrySchema<"demos">
} & { render(): Render[".md"] };
"pure-css-fancy-loader/pure-css-fancy-loader.md": {
	id: "pure-css-fancy-loader/pure-css-fancy-loader.md";
  slug: "pure-css-fancy-loader/pure-css-fancy-loader";
  body: string;
  collection: "demos";
  data: InferEntrySchema<"demos">
} & { render(): Render[".md"] };
"shapes-1/shapes-1.md": {
	id: "shapes-1/shapes-1.md";
  slug: "shapes-1/shapes-1";
  body: string;
  collection: "demos";
  data: InferEntrySchema<"demos">
} & { render(): Render[".md"] };
"shapes-2/shapes-2.md": {
	id: "shapes-2/shapes-2.md";
  slug: "shapes-2/shapes-2";
  body: string;
  collection: "demos";
  data: InferEntrySchema<"demos">
} & { render(): Render[".md"] };
"shapes-3/shapes-3.md": {
	id: "shapes-3/shapes-3.md";
  slug: "shapes-3/shapes-3";
  body: string;
  collection: "demos";
  data: InferEntrySchema<"demos">
} & { render(): Render[".md"] };
"shapes-4/shapes-4.md": {
	id: "shapes-4/shapes-4.md";
  slug: "shapes-4/shapes-4";
  body: string;
  collection: "demos";
  data: InferEntrySchema<"demos">
} & { render(): Render[".md"] };
"the-last-of-us/the-last-of-us.md": {
	id: "the-last-of-us/the-last-of-us.md";
  slug: "the-last-of-us/the-last-of-us";
  body: string;
  collection: "demos";
  data: InferEntrySchema<"demos">
} & { render(): Render[".md"] };
};
"posts": {
"3d-cube-with-css/3d-cube-with-css.md": {
	id: "3d-cube-with-css/3d-cube-with-css.md";
  slug: "3d-cube-with-css/3d-cube-with-css";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
"shapes/shapes.md": {
	id: "shapes/shapes.md";
  slug: "shapes/shapes";
  body: string;
  collection: "posts";
  data: InferEntrySchema<"posts">
} & { render(): Render[".md"] };
};

	};

	type DataEntryMap = {
		
	};

	type AnyEntryMap = ContentEntryMap & DataEntryMap;

	export type ContentConfig = typeof import("../../src/content/config.js");
}
