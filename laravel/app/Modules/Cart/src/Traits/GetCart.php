<?php

namespace App\Modules\Cart\src\Traits;

use App\Modules\Cart\src\Enums\CartStatusEnum;
use Cart\Models\UserCart;
use Illuminate\Http\Request;
trait GetCart
{
    protected function getCart(Request $request): UserCart
    {
        $sessionId = $request->session()->getId();

        if ($request->user()) {
            $cart = UserCart::where('session_id', $sessionId)
                ->whereNull('user_id')
                ->where('status', CartStatusEnum::Active)
                ->first();

            if ($cart) {
                $cart->update(['user_id' => $request->user()->id]);
                return $cart;
            }

            return UserCart::firstOrCreate(
                ['user_id' => $request->user()->id, 'status' => CartStatusEnum::Active],
                ['session_id' => $sessionId]
            );
        }

        return UserCart::firstOrCreate(
            ['user_id' => null, 'session_id' => $sessionId, 'status' => CartStatusEnum::Active]
        );
    }

}
