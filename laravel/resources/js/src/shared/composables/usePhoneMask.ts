import type { Ref } from 'vue'
import { nextTick } from 'vue'

const FULL_LENGTH = 11

export function useRuPhoneMask(model: Ref<string | undefined>) {
  function getDigits(value: string) {
    return value.replace(/\D/g, '')
  }

  function format(value: string): string {
    let digits = getDigits(value)

    if (!digits) return ''

    const originalDigits = digits
    const isFirstInput = originalDigits.length === 1

    // 8 → 7
    if (digits.startsWith('8')) {
      digits = '7' + digits.slice(1)
    }

    if (!digits.startsWith('7')) {
      digits = '7' + digits
    }

    digits = digits.slice(0, FULL_LENGTH)

    if (digits.length <= 1) {
      if (isFirstInput) {
        if (originalDigits === '8') {
          digits = '7'
        } else if (originalDigits === '7') {
          digits = '7'
        } else {
          digits = '7' + originalDigits
        }
      } else {
        return ''
      }
    }

    let formatted = '+7'

    if (digits.length >= 2) {
      const firstPart = digits.slice(1, Math.min(4, digits.length))
      if (firstPart.length > 0) {
        formatted += ' (' + firstPart
        if (firstPart.length >= 3) {
          formatted += ')'
        }
      }
    } else if (digits.length === 1 && digits === '7' && isFirstInput) {
      formatted += ' ('
    }

    if (digits.length >= 5) {
      const secondPart = digits.slice(4, 7)
      formatted += ' ' + secondPart
    }

    if (digits.length >= 8) {
      const thirdPart = digits.slice(7, 9)
      formatted += '-' + thirdPart
    }

    if (digits.length >= 10) {
      const fourthPart = digits.slice(9, 11)
      formatted += '-' + fourthPart
    }

    return formatted
  }

  function onInput(e: Event) {
    const input = e.target as HTMLInputElement
    if (!input) return

    const inputDigits = getDigits(input.value)

    if (inputDigits.length > FULL_LENGTH) {
      const limitedDigits = inputDigits.slice(0, FULL_LENGTH)
      const formatted = format(limitedDigits)
      const finalValue = formatted || ''

      input.value = finalValue
      model.value = finalValue

      nextTick(() => {
        if (!formatted) return
        const pos = formatted.length
        input.setSelectionRange(pos, pos)
      })
      return
    }

    const formatted = format(input.value)
    const finalValue = formatted || ''

    if (input.value !== finalValue) {
      input.value = finalValue
      model.value = finalValue
    } else if (model.value !== finalValue) {
      model.value = finalValue
    }

    nextTick(() => {
      if (!formatted) return
      const pos = formatted.length
      input.setSelectionRange(pos, pos)
    })
  }

  function onBlur(e: Event) {
    const input = e.target as HTMLInputElement
    if (!input) return

    if (!model.value) return

    const digits = getDigits(model.value)

    if (digits.length < FULL_LENGTH) {
      model.value = ''
      input.value = ''
    }
  }

  function onPaste(e: ClipboardEvent) {
    e.preventDefault()
    const input = e.target as HTMLInputElement
    if (!input) return

    const text = e.clipboardData?.getData('text') ?? ''

    const pastedDigits = getDigits(text)

    if (!pastedDigits) {
      return
    }

    const limitedDigits = pastedDigits.slice(0, FULL_LENGTH)

    const formatted = format(limitedDigits)
    const finalValue = formatted || ''

    input.value = finalValue
    model.value = finalValue

    nextTick(() => {
      const pos = formatted ? formatted.length : 0
      input.setSelectionRange(pos, pos)
    })
  }

  return {
    onInput,
    onPaste,
    onBlur,
  }
}
