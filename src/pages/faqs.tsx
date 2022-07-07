import type { NextPage } from 'next'
// Components
import MainLayout from 'src/layouts'
// Models
import { PageWithMainLayout } from 'src/models/nextPage'

const Faqs: NextPage = () => {
  const faqTexts = [
    {
      question: 'What does picopala do?',
      answer:
        'We are a loan taker that finances the interest rates with Bitcoin mining, the only business that has pure income in BTC. We receive the funds, buy mining equipment and put it to work.',
    },
    {
      question: 'What interest rate do they pay?',
      answer: 'At the moment we are paying 1% per year',
    },
    {
      question: 'How long do you need my capital?',
      answer:
        'Today with the current context, we are going to need it for 2 years. In that period we will be able to pay the interest and recover the capital invested.',
    },
    {
      question: 'What type of energy do they use?',
      answer: 'We use 100% renewable energy, between solar and wind power',
    },
  ]

  return (
    <div className="py-12 md:py-16">
      <h1 className="font-bold text-2xl md:text-3xl pb-6">Faqs</h1>
      <div>
        {faqTexts.map((faq) => (
          <div key={faq.question} className="py-4">
            <h2 className="text-gray-800 text-2xl border-b-4 border-orange-500 max-w-max pb-1 mb-3">
              {faq.question}
            </h2>
            <span className="text-gray-800 text-xl">{faq.answer}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

;(Faqs as PageWithMainLayout).layout = MainLayout

export default Faqs
