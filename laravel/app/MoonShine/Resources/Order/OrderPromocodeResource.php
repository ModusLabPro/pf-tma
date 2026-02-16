<?php

declare(strict_types=1);

namespace App\MoonShine\Resources\Order;

use App\Modules\Order\src\Enums\OrderStatusEnum;
use App\MoonShine\Resources\User\UserResource;
use Illuminate\Database\Eloquent\Model;
use MoonShine\AssetManager\InlineJs;
use MoonShine\AssetManager\Js;
use MoonShine\Laravel\Fields\Relationships\BelongsTo;
use MoonShine\Laravel\Resources\ModelResource;
use MoonShine\Support\DTOs\Select\Option;
use MoonShine\Support\DTOs\Select\OptionProperty;
use MoonShine\Support\DTOs\Select\Options;
use MoonShine\UI\Components\Layout\Box;
use MoonShine\UI\Components\Layout\Flex;
use MoonShine\UI\Fields\Date;
use MoonShine\UI\Fields\Enum;
use MoonShine\UI\Fields\ID;
use MoonShine\Contracts\UI\FieldContract;
use MoonShine\Contracts\UI\ComponentContract;
use MoonShine\UI\Fields\Number;
use MoonShine\UI\Fields\Select;
use MoonShine\UI\Fields\Text;
use Order\Enums\OrderPromocodeStatusEnum;
use Order\Models\OrderPromocode;

/**
 * @extends ModelResource<OrderPromocode>
 */
class OrderPromocodeResource extends ModelResource
{
    protected string $model = OrderPromocode::class;

    protected string $title = 'Промокоды';

    protected bool $isAsync = false;

    protected function indexFields(): iterable
    {
        return [
            ID::make()->sortable(),
            Text::make('Промокод','promocode'),
            Enum::make('Статус','status')->attach(OrderPromocodeStatusEnum::class),
            Number::make('Процент скидки','percent'),
            Number::make('Количество применений','number_applications'),
            Text::make('Комментарий','description'),
            Number::make('Лимит применений','exceeded_limit')->nullable(),

        ];
    }

    protected function formFields(): iterable
    {

/*        $selectOptions = [];

        foreach (OrderPromocodeStatusEnum::cases() as $case) {
            $selectOptions[] =  new Option(
                label: $case->toString(),
                value: $case->value,
                properties: new OptionProperty($case->disabledSelect()),
                selected: $this->getItem()?->status?->value == $case->value ? true : false,
            );
        }*/

        return [
            Box::make([
                ID::make()->sortable(),
                Text::make('Промокод','promocode'),
                Text::make('Комментарий','description'),
/*                Select::make('status')->options(OrderPromocodeStatusEnum::toArray()),*/
                Enum::make('Статус','status')->attach(OrderPromocodeStatusEnum::class)
                    ->required()->native(),

/*                Select::make('Статус','status')->options(
                    new Options($selectOptions)
                ),*/

                Number::make('Процент скидки','percent')->required()->min(1)->max(40),
                Flex::make([
                    Date::make('Дата начала действия','date_from')->withTime()->nullable(),
                    Date::make('Дата окончания действия','date_to')->withTime()->nullable(),
                ]),
                Number::make('Количество применений','number_applications')->default(0)->required(),
                Number::make('Лимит применений','exceeded_limit')->nullable(),
            ])
        ];
    }
/*    case active = 'active';
    case inactive = 'inactive'; //отключен вручную
    case expired = 'expired'; //неактивен срок действия
    case exceeded_limit = 'exceeded_limit'; //достигнут лимит количества применений*/



    protected function assets(): array
    {
        return [
            InlineJs::make(<<<'JS'
                    document.addEventListener("DOMContentLoaded", function() {
                        document.querySelectorAll("select[name='status'] option").forEach(opt => {
                            if (opt.value == "expired") opt.disabled = true;
                            if (opt.value == "exceeded_limit") opt.disabled = true;
                        });
                    });
                JS),
        ];
    }

    protected function detailFields(): iterable
    {
        return [
            ID::make(),
        ];
    }

    protected function rules(mixed $item): array
    {
        return [];
    }
}
