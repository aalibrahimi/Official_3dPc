// Create this file at: src/app/[locale]/Gallery/[id]/page.tsx

import BuildDetailPage from "../../Details/page";

/**
 * Dynamic Route Page for Build Details
 * 
 * The [id] in the folder path is a dynamic segment in Next.js routing
 * 
 * How it works:
 * - So in Next.js it treats folders wrapped in [] as dynamic route segments
 * - When a user visits /Gallery/gaming-high, the 'gaming-high' becomes the [id] parameter
 * - This parameter is accessible in the component via useParams() hook 😏
 * 
 * Benefits of [id] dynamic routing:
 * 1. Single page component handles all build details
 * 2. No need to create individual pages for each build
 * 3. Scales automatically as you add more builds
 * 4. Clean URL structure: /Gallery/gaming-budget, /Gallery/ultimate-rig, etc. hehehee
 * 
 * The BuildDetailPage component uses useParams() to:
 * - Extract the id from the URL
 * - Find the matching build in the BUILDS array
 * - Display the appropriate build details
 * 
 * Example:
 * URL: /Gallery/gaming-high
 * params.id = "gaming-high"
 * Component finds build with id="gaming-high" and renders its details
 * 
 * text me if you have any other questions about this ( this is how we will be creatings your sis website if given the opportunity)
 */

export default function Page() {
  return <BuildDetailPage />
}