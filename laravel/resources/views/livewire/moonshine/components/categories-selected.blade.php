<div>

<!--    <script
        src="https://code.jquery.com/jquery-3.7.1.slim.min.js"
        integrity="sha256-kmHvs0B+OpCW5GVHUNjv9rOmY0IvSIRcf7zGUDTDQM8="
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>-->

<!--    <input id="search_categories" type="text" wire:model="search" class="baton" placeholder="Поиск">-->

    <input id="select_all" type="button" onclick="check();" class="baton" value="Выделить все">

    <input id="unselect_all" type="button" onclick="uncheck();" class="baton" value="Снять выделение">

    <div class="categories-selected-container">
        @foreach($categoriesLvl1 as $category)
            @php
            if(in_array($category->id, $categoriesIdCheckedArray)) {
                   $category->checked = true;
               }
            @endphp
            @if($category->children->count() > 0)
                <div class="category">
                    <details>
                        <summary>
                            <input type="checkbox"
                                   class="custom-checkbox categories-checkbox"
                                   id="cat{{$category->id}}"
                                   name="categories[{{$category->id}}]"
                                @checked($defaultChecked)
                                @checked($category->checked)
                            />
                            <label for="cat{{$category->id}}">{{$category->name}}</label>

                        </summary>
                        @php
                            if($category->children) {
                                 echo renderChildren($category, $defaultChecked, $categoriesIdCheckedArray);
                            }
                        @endphp
                    </details>
                </div>
            @else
                <div class="category">
                    <input type="checkbox"
                           class="custom-checkbox categories-checkbox"
                           id="cat{{$category->id}}"
                           name="categories[{{$category->id}}]"
                        @checked($defaultChecked)
                        @checked($category->checked)
                    />
                    <label for="cat{{$category->id}}">{{$category->name}}</label>

                </div>
            @endif
        @endforeach
    </div>

    @php

        function renderChildren($categoryParent, $defaultChecked, $categoriesIdCheckedArray) {
           $html = '';

            foreach ($categoryParent->children as $category) {
                 $checked = $defaultChecked ? 'checked="checked"' : '';

                if(in_array($category->id, $categoriesIdCheckedArray)) {
                    $category->checked = true;
                }
                if($category->checked) $checked = 'checked="checked"';
                 if($category->children->count() > 0) {
    $html .= <<<html
    <div class="category children">
    <details>
        <summary>
            <input type="checkbox" class="custom-checkbox categories-checkbox" id="cat{$category->id}" name="categories[{$category->id}]" {$checked}>
            <label for="cat{$category->id}">{$category->name}</label>
        </summary>
html;
    $html .= renderChildren($category, $defaultChecked, $categoriesIdCheckedArray);
    $html .= <<<html
    </details>
    </div>
    html;
} else {
    $html .= <<<html
    <div class="category children">
        <input type="checkbox" class="custom-checkbox categories-checkbox" id="cat{$category->id}" name="categories[{$category->id}]" {$checked}>
        <label for="cat{$category->id}">{$category->name}</label>
    </div>
    html;
}

            }

            return $html;
        }
    @endphp

<script>

/*    let categories = document.querySelectorAll('.categories-selected-container .category');
    function categoriesSearch(event) {
        if(event.target.value == "") {
            categories.forEach(function(item) {
                item.style.display = 'block';
                console.log(item)
            });
            return;
        } else {
            categories.forEach(function(item) {
                let categoryName = item.querySelector('label').innerText;

                if(!categoryName.toLowerCase().includes(event.target.value.toLowerCase())) {
                    item.style.display = 'none';
                }
                else {
                    item.style.display = 'block';
                }
            });
        }

    }*/

    document.querySelector('.categories-selected-container').addEventListener('change', function (event){
        let checkbox = event.target;
        let checkboxContainer = checkbox.closest('.category');

        let children = checkboxContainer.querySelectorAll('.categories-checkbox')

        if(checkbox.checked) {

            let parentParent = checkboxContainer.parentElement.closest('.category');
            parentParent.querySelector('.categories-checkbox').checked = true;
            let parentParentParent = parentParent.parentElement.closest('.category');
            parentParentParent.querySelector('.categories-checkbox').checked = true;
            let parentParentParentParent = parentParentParent.parentElement.closest('.category');
            parentParentParentParent.querySelector('.categories-checkbox').checked = true;

        } else {
            children.forEach(function(item){
                item.checked = false;
            });

        }

    });

    function check() {
        var check = document.querySelectorAll('input.categories-checkbox');
        for (var i = 0; i < check.length; i++) {
            if (check[i].type == 'checkbox') {
                check[i].checked = true;
            }
        }
    }

    function uncheck() {
        var uncheck = document.querySelectorAll('input.categories-checkbox');
        for (var i = 0; i < uncheck.length; i++) {
            if (uncheck[i].type == 'checkbox') {
                uncheck[i].checked = false;
            }
        }
    }
</script>

<style>

    .category.children {
        margin-left: 50px;
    }
    .category {
        padding: 4px;
    }
    .categories-checkbox {
        margin-right: 6px;
        border-radius: 5px;
        width: 20px;
        height: 20px;
    }

</style>

<style>
    summary {
        list-style: none;
        position: relative;
        padding-left: 25px;
        cursor: pointer;
        display: flex;
        align-items: center;
        gap: 8px;
    }

    summary::-webkit-details-marker {
        display: none;
    }

    summary::before {
        content: "";
        position: absolute;
        left: -5px;
        top: 50%;
        transform: translateY(-50%);
        width: 32px;
        height: 32px;
        background-image: url("data:image/svg+xml,%3csvg fill='%23000000' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3e%3cpath d='M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6z'/%3e%3c/svg%3e");
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
        transition: transform 0.3s ease;
    }

    details[open] summary::before {
        transform: translateY(-50%) rotate(90deg);
    }


    .table_block td {
        padding: 10px;
    }

    .table_block tbody {
        border-radius: 30px;
        box-shadow: 0 0 1px #000;
    }


    /*button*/
    .baton {
        display: inline-block;
        box-sizing: border-box;
        padding: 0 25px;
        margin: 0 15px 15px 0;
        outline: none;
        border: 1px solid #fff;
        border-radius: 50px;
        height: 46px;
        line-height: 46px;
        font-size: 14px;
        font-weight: 600;
        text-decoration: none;
        color: #444;
        background-color: #fff;
        box-shadow: 0 4px 6px rgb(65 132 144 / 10%), 0 1px 3px rgb(0 0 0 / 8%);
        cursor: pointer;
        user-select: none;
        appearance: none;
        touch-action: manipulation;
        vertical-align: top;
        transition: box-shadow 0.2s;
    }

    .baton:focus-visible {
        border: 1px solid #c421ff;
        outline: none;
    }

    .baton:hover {
        transition: all 0.2s;
        box-shadow: 0 7px 14px rgb(65 132 144 / 10%), 0 3px 6px rgb(0 0 0 / 8%);
    }

    .baton:active {
        background-color: rgba(var(--menu-active-bg, var(--primary)),var(--tw-bg-opacity, 1));
    }

    .baton:disabled {
        background-color: #eee;
        border-color: #eee;
        color: #444;
        cursor: not-allowed;
    }


    .div-table-row {
        width: auto;
        clear: both;

    }

    #table tbody tr:nth-child(odd) {
        background: #C4ABE5;
    }

    /* Четные строки */
    #table tbody tr:nth-child(even) {
        background: #efe7fc;

    }

    /* new checkbox*/
    .custom-checkbox {
        position: absolute;
        z-index: -1;
        opacity: 0;
    }

    .custom-checkbox + label {
        display: inline-flex;
        align-items: center;
        user-select: none;
    }


    .custom-checkbox + label::before {
        content: '';
        display: inline-block;
        width: 1em;
        height: 1em;
        flex-shrink: 0;
        flex-grow: 0;
        border: 1px solid #adb5bd;
        border-radius: 0.25em;
        margin-right: 0.5em;
        background-repeat: no-repeat;
        background-position: center center;
        background-size: 50% 50%;
    }

    .custom-checkbox:checked + label::before {
        border-color: #ffffff;
        background-color: #ffffff;
        background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 8 8'%3e%3cpath fill='%2302283F' d='M6.564.75l-3.59 3.612-1.538-1.55L0 4.26 2.974 7.25 8 2.193z'/%3e%3c/svg%3e");
        background-size: 70% 70%; /* увеличиваем размер галочки */
        background-repeat: no-repeat;
        background-position: center center;
    }

    /* стили при наведении курсора на checkbox */
    .custom-checkbox:not(:disabled):not(:checked) + label:hover::before {
        border-color: #d8b3ff;
    }

    /* стили для активного состояния чекбокса (при нажатии на него) */
    .custom-checkbox:not(:disabled):active + label::before {
        background-color: #02283F;
        border-color: #02283F;
    }

    /* стили для чекбокса, находящегося в фокусе */
    .custom-checkbox:focus + label::before {
        box-shadow: 0 0 0 0.2rem rgba(136, 0, 255, 0.25);
    }

    /* стили для чекбокса, находящегося в фокусе и не находящегося в состоянии checked */
    .custom-checkbox:focus:not(:checked) + label::before {

        border-color: #e9cdfa;
    }

    /* стили для чекбокса, находящегося в состоянии disabled */
    .custom-checkbox:disabled + label::before {
        background-color: #ede9ef;
    }
    label{
        font-size: 20px;
    }
</style>


</div>
