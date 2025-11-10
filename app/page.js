'use client'

import { useState } from 'react'
import Sidebar from '@/components/Sidebar'
import ChatArea from '@/components/ChatArea'
import InsightCards from '@/components/InsightCards'

export default function Home() {
  const [activeView, setActiveView] = useState('dashboard')

  return (
    <div className="flex h-screen bg-slate-900">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />

      <main className="flex-1 flex flex-col overflow-hidden">
        {activeView === 'dashboard' && (
          <>
            <header className="bg-slate-800 border-b border-slate-700 px-6 py-4">
              <h1 className="text-2xl font-bold text-white">Orion AI Dashboard</h1>
              <p className="text-slate-400 text-sm mt-1">Ask me anything about your business metrics</p>
            </header>

            <div className="flex-1 overflow-y-auto p-6">
              <InsightCards />
              <ChatArea />
            </div>
          </>
        )}

        {activeView === 'insights' && (
          <>
            <header className="bg-slate-800 border-b border-slate-700 px-6 py-4">
              <h1 className="text-2xl font-bold text-white">Business Insights</h1>
              <p className="text-slate-400 text-sm mt-1">Key metrics and analytics</p>
            </header>

            <div className="flex-1 overflow-y-auto p-6">
              <InsightCards />
            </div>
          </>
        )}

        {activeView === 'settings' && (
          <>
            <header className="bg-slate-800 border-b border-slate-700 px-6 py-4">
              <h1 className="text-2xl font-bold text-white">Settings</h1>
              <p className="text-slate-400 text-sm mt-1">Configure your dashboard preferences</p>
            </header>

            <div className="flex-1 overflow-y-auto p-6">
              <div className="max-w-2xl">
                <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                  <h2 className="text-xl font-semibold mb-4">Dashboard Settings</h2>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        AI Model
                      </label>
                      <select className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white">
                        <option>GPT-4 Turbo</option>
                        <option>GPT-3.5</option>
                        <option>Claude 2</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-slate-300 mb-2">
                        Response Length
                      </label>
                      <select className="w-full bg-slate-700 border border-slate-600 rounded-lg px-4 py-2 text-white">
                        <option>Concise</option>
                        <option>Detailed</option>
                        <option>Comprehensive</option>
                      </select>
                    </div>

                    <div className="pt-4">
                      <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                        Save Settings
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </main>
    </div>
  )
}
