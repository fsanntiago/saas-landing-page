import { useState } from 'react'

import { cn } from '../lib/utils'
import { FaqItem } from '../utils/faqs-list'
import * as Icons from './icons'

interface AccordionItemProps {
  fqaItem: FaqItem
}

export function AccordionFAQItem({
  fqaItem: { answer, id, question },
}: AccordionItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div
      key={id}
      className="border-b border-white/30 py-7 hover:cursor-pointer"
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex items-center">
        <span className="flex-1 text-lg font-bold">{question}</span>
        {isOpen ? <Icons.Minus /> : <Icons.Plus />}
      </div>
      <div className={cn('mt-4', isOpen ? '' : 'hidden')}>{answer}</div>
    </div>
  )
}
