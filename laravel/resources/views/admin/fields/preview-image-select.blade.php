<script src="https://cdn.tailwindcss.com"></script>

@php
    $images = $item?->images ?? collect();
    $selectedPreviewPaths = is_array($item?->preview_images) ? $item->preview_images : [];
@endphp

<div class="flex flex-wrap" style="gap: 0.5rem; padding: .75rem; border-radius: 5px; border: 1px solid #a39874">
    @forelse($images as $image)
        @php
            $isSelected = in_array($image->path, $selectedPreviewPaths, true);
        @endphp

        <label class="inline-flex flex-col items-center cursor-pointer">
            <img
                src="{{ Storage::url($image->path) }}"
                style="width: 200px; height: 200px; border-radius: 5px"
                class="object-cover rounded border {{ $isSelected ? 'border-green-500' : 'border-gray-200' }}"
                alt="preview image"
            >

            <input
                type="checkbox"
                name="preview_images[]"
                value="{{ $image->path }}"
                @checked($isSelected)
                class="mb-2 sr-only peer"
            >

            <div class="mt-2 relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 rounded-full peer dark:bg-gray-700 dark:peer-focus:ring-blue-800 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
        </label>
    @empty
        <p class="text-sm text-gray-500">Превью будет доступно после загрузки изображений.</p>
    @endforelse
</div>


