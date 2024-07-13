import { AnimatePresence, motion } from 'framer-motion'

import { FaqItem } from '../utils/faqs-list'
import * as Icons from './icons'

interface AccordionItemProps {
  fqaItem: FaqItem
  isOpen: boolean
  onClick: () => void
}

export function AccordionFAQItem({
  fqaItem: { answer, id, question },
  onClick,
  isOpen,
}: AccordionItemProps) {
  return (
    <div
      key={id}
      className="border-b border-white/30 py-7 hover:cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-center">
        <span className="flex-1 text-lg font-bold">{question}</span>
        {isOpen ? <Icons.Minus /> : <Icons.Plus />}
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0, marginTop: 0 }}
            animate={{ opacity: 1, height: 'auto', marginTop: '16px' }}
            exit={{ opacity: 0, height: 0, marginTop: 0 }}
          >
            {answer}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
