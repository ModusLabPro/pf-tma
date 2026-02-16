import "../ssr.js";
import { router } from "@inertiajs/core";
function reactToReview(id, type) {
  router.post(
    `/review/${id}/toggle`,
    {
      type
    },
    {
      preserveScroll: true,
      preserveState: true
    }
  );
}
export {
  reactToReview as r
};
