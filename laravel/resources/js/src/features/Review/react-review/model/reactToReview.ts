import { router } from '@inertiajs/vue3';

export function reactToReview(id: number, type: 'like' | 'dislike'): void {
  router.post(
    `/review/${id}/toggle`,
    {
      type,
    },
    {
      preserveScroll: true,
      preserveState: true,
    },
  );
}
