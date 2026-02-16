<?php

namespace App\Notifications;

use Bonus\Models\UserBonusHistory;
use Illuminate\Bus\Queueable;
use Illuminate\Notifications\Notification;
use Illuminate\Notifications\Messages\MailMessage;

class BirthdayBonusNotification extends Notification
{
    use Queueable;

    public function __construct(
        protected int $amount
    ) {}

    public function via($notifiable): array
    {
        return ['mail', 'database'];
    }

    public function toMail($notifiable)
    {
        return (new MailMessage)
            ->subject("🎉 С Днём Рождения! Вам начислены бонусы")
            ->greeting("Поздравляем с Днём Рождения, {$notifiable->name}!")
            ->line("В честь вашего дня рождения вам начислено {$this->amount} бонусов.")
            ->line('Эти бонусы можно использовать для оплаты заказов в нашем магазине.')
            ->action('Перейти в профиль', url('/profile'))
            ->line('Спасибо, что с нами! 🎂');
    }

    public function toArray($notifiable): array
    {
        return [
            'type' => 'birthday_bonus',
            'amount' => $this->amount,
            'message' => "Вам начислено {$this->amount} бонусов в честь дня рождения",
        ];
    }
}
