import type { PageLoad } from "./$types.js";
import { getDoc } from "$lib/utils.js";

export const load: PageLoad = async (event) => {
    const slugArray = event.params.slug.split("/");

    if (slugArray[slugArray.length - 1] === "index" || slugArray.length === 1) {
        const { component, title, metadata } = await getDoc(`os-course/module/${slugArray[0]}/index`);
        return {
            component,
            metadata,
            title,
        };
    } else {
        const { component, title, metadata } = await getDoc(`os-course/module/${slugArray[0]}/${slugArray[1]}`);
        return {
            component,
            metadata,
            title,
        };
    }
};
