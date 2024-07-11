export interface FaqItem {
  id: string
  question: string
  answer: string
}

export const faqsList: FaqItem[] = [
  {
    id: '1',
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards, PayPal, and various other payment methods depending on your location. Please contact our support team for more information on accepted payment methods in your region.',
  },
  {
    id: '2',
    question: 'How does the pricing work for teams?',
    answer:
      'Our pricing is per user, per month. This means you only pay for the number of team members you have on your account. Discounts are available for larger teams and annual subscriptions.',
  },
  {
    id: '3',
    question: 'Can I change my plan later?',
    answer:
      'Yes, you can upgrade or downgrade your plan at any time. Changes to your plan will be prorated and reflected in your next billing cycle.',
  },
  {
    id: '4',
    question: 'Is my data secure?',
    answer:
      'Security is our top priority. We use state-of-the-art encryption and comply with the best industry practices to ensure that your data is stored securely and accessed only by authorized users.',
  },
]
