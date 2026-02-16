@props(['url'])
<tr>
<td class="header">
<a href="{{ $url }}" style="display: inline-block;">
@if (trim($slot) === 'pstore')
<img src="{{ asset('images/logo.png') }}" class="logo" alt="">
@else
{{ $slot }}
@endif
</a>
</td>
</tr>
