@php
    $tabItems = $langs->mapWithKeys(fn($lang) => [
        'lang_' . $lang->id => $lang->title
    ])->toArray();
@endphp

<x-moonshine::tabs :items="$tabItems">
    @foreach($langs as $lang)
        <x-slot :name="'lang_' . $lang->id">
            @foreach($translatedFields as $fieldKey => $config)
                @php
                    $rawValue = $translations[$lang->id . '.' . $fieldKey][0]->translate ?? '';

                    if (($config['type'] ?? '') === 'long_text') {
                        // для long_text - без очистки, полный html
                        $value = $rawValue;
                    } else {
                        // для остальных типов - очищаем html
                        $value = strip_tags($rawValue);
                    }
                @endphp

                <x-moonshine::field-container :label="$config['title']">
                    @if($config['type'] === 'text')
                        <x-moonshine::form.input
                            type="text"
                            name="translations[{{ $lang->id }}][{{ $fieldKey }}]"
                            :value="$value"
                        />
                    @endif
                    @if($config['type'] === 'textarea')
                            <x-moonshine::form.textarea name="translations[{{ $lang->id }}][{{ $fieldKey }}]">
                                {{$value}}
                            </x-moonshine::form.textarea>

                        @endif
                    @if($config['type'] === 'long_text' || $config['type'] === 'longText' || $config['type'] === 'longtext')
                        <!-- Place the first <script> tag in your HTML's <head> -->
                        <script src="{{asset('vendor/moonshine-tinymce/tinymce.min.js')}}" referrerpolicy="origin"></script>

                        <!-- Place the following <script> and <textarea> tags your HTML's <body> -->
                        <script>
                            tinymce.init({
                                selector: 'textarea.tinymce',
                                valid_styles: {
                                    '*': 'text-align,line-height,margin,padding'
                                },
                                plugins: 'anchor importcss autolink code charmap codesample visualchars emoticons image link lists media searchreplace table visualblocks wordcount advlist',
                                content_css: '{{asset('/vendor/moonshine-tinymce/tinymce.css')}}',
                                toolbar: 'undo redo code | blocks fontfamily visualchars searchreplace fontsize | bold italic underline strikethrough | link image media table | alignleft aligncenter alignright alignjustify | lineheight | numlist bullist indent outdent | emoticons charmap | removeformat',
                                content_style: `
                                    body {
                                        background-color: #222f3e; /* фон редактора */
                                        color: #ffffff;
                                    }
                                `,


                                setup: function (editor) {
                                    editor.on('init', function () {
                                        const container = editor.getContainer(); // .tox контейнер
                                        if (container) {
                                            container.style.border = '1px solid #a39874';
                                        }
                                    });
                                }
                            });
                        </script>
                            <style>
                                .tox .tox-edit-area::before{
                                    border:none !important;
                                }
                            </style>
                        <textarea
                            class="tinymce" name="translations[{{ $lang->id }}][{{ $fieldKey }}]">
                             {!! $value !!}
                        </textarea>
                    @endif
                </x-moonshine::field-container>
            @endforeach
        </x-slot>
    @endforeach
</x-moonshine::tabs>

