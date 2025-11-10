'use client'

import { useState } from 'react'

export default function ChatArea() {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hello! I\'m Orion, your AI business intelligence assistant. Ask me anything about your business metrics, revenue trends, customer insights, or performance analytics.',
    },
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)

  const mockResponses = {
    revenue: 'Based on the latest data, revenue is down 12% compared to last quarter. The main factors include: (1) Seasonal slowdown in Q3, (2) Increased competition in the market, and (3) A delay in launching our new product line. I recommend focusing on customer retention strategies and accelerating the product launch timeline.',
    customer: 'Customer growth shows a positive trend with 23% increase in new acquisitions this month. However, churn rate has increased to 5.2%. To improve retention, consider implementing a loyalty program and enhancing customer support response times.',
    conversion: 'Current conversion rate stands at 3.8%, which is above industry average. The top-performing channels are organic search (4.2%) and email marketing (5.1%). To optimize further, I suggest A/B testing the checkout process and improving mobile experience.',
    sales: 'Sales performance is strong in the enterprise segment (+18% MoM) but flat in SMB. The average deal size increased to $12,400. Consider reallocating resources to focus more on enterprise opportunities while automating SMB outreach.',
    marketing: 'Marketing ROI improved by 15% this quarter. Email campaigns show the highest ROI at 420%, followed by content marketing at 280%. Paid ads are underperforming at 110% ROI. I recommend shifting budget from paid ads to content and email strategies.',
    default: 'That\'s an interesting question! Based on current business metrics and trends, I can provide several insights. Your overall business health is strong with positive momentum in key areas like customer acquisition and product engagement. However, there are opportunities to improve conversion rates and reduce operational costs. Would you like me to dive deeper into any specific area?',
  }

  const getResponse = (query) => {
    const lowerQuery = query.toLowerCase()

    if (lowerQuery.includes('revenue') || lowerQuery.includes('sales down') || lowerQuery.includes('income')) {
      return mockResponses.revenue
    } else if (lowerQuery.includes('customer') || lowerQuery.includes('user') || lowerQuery.includes('growth')) {
      return mockResponses.customer
    } else if (lowerQuery.includes('conversion') || lowerQuery.includes('convert')) {
      return mockResponses.conversion
    } else if (lowerQuery.includes('sales') || lowerQuery.includes('deal')) {
      return mockResponses.sales
    } else if (lowerQuery.includes('marketing') || lowerQuery.includes('campaign') || lowerQuery.includes('roi')) {
      return mockResponses.marketing
    } else {
      return mockResponses.default
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = { role: 'user', content: input }
    setMessages([...messages, userMessage])
    setInput('')
    setIsTyping(true)

    setTimeout(() => {
      const aiResponse = { role: 'assistant', content: getResponse(input) }
      setMessages((prev) => [...prev, aiResponse])
      setIsTyping(false)
    }, 1000)
  }

  return (
    <div className="mt-8">
      <div className="bg-slate-800 rounded-lg border border-slate-700 flex flex-col h-[500px]">
        <div className="border-b border-slate-700 px-6 py-4">
          <h3 className="text-lg font-semibold text-white">AI Assistant</h3>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-4 scrollbar-hide">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg px-4 py-3 ${
                  message.role === 'user'
                    ? 'bg-blue-600 text-white'
                    : 'bg-slate-700 text-slate-100'
                }`}
              >
                <p className="text-sm leading-relaxed">{message.content}</p>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start">
              <div className="bg-slate-700 text-slate-100 rounded-lg px-4 py-3">
                <div className="flex space-x-2">
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                  <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                </div>
              </div>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="border-t border-slate-700 p-4">
          <div className="flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me about revenue, customers, conversions..."
              className="flex-1 bg-slate-700 border border-slate-600 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
