'use client'

import { useState } from 'react'

const scriptTemplates = [
  {
    category: 'Hook',
    templates: [
      "Nobody talks about this...",
      "This changed everything for me...",
      "Wait for the twist...",
      "You're doing this wrong...",
      "The secret nobody tells you...",
      "This blew my mind...",
      "Stop scrolling, this is important...",
      "I can't believe this worked..."
    ]
  },
  {
    category: 'Story',
    templates: [
      "So I tried {topic} for 30 days and here's what happened...",
      "Everyone said I was crazy but watch this...",
      "I spent {money} on {topic} so you don't have to...",
      "The truth about {topic} that no one tells you...",
      "I tested every {topic} method and only one worked...",
      "Before you try {topic}, watch this first...",
      "My {topic} journey from zero to {result}...",
      "{Number} mistakes I made with {topic}..."
    ]
  },
  {
    category: 'Call-to-Action',
    templates: [
      "Save this before it's too late",
      "Follow for more tips like this",
      "Comment your thoughts below",
      "Share this with someone who needs it",
      "Drop a 🔥 if this helped",
      "Which one surprised you most?",
      "Tag someone who needs to see this",
      "Hit follow for daily {topic} tips"
    ]
  }
]

const niches = [
  'Fitness', 'Money Making', 'Self Improvement', 'Tech', 'Fashion',
  'Travel', 'Food', 'Gaming', 'Beauty', 'Motivation', 'Business',
  'Productivity', 'Mindset', 'Health', 'Relationships'
]

const tones = [
  'Energetic', 'Mysterious', 'Educational', 'Entertaining',
  'Inspiring', 'Controversial', 'Storytelling', 'Direct'
]

export default function Home() {
  const [niche, setNiche] = useState('')
  const [tone, setTone] = useState('')
  const [script, setScript] = useState('')
  const [loading, setLoading] = useState(false)

  const generateScript = () => {
    if (!niche || !tone) {
      alert('Please select a niche and tone')
      return
    }

    setLoading(true)

    setTimeout(() => {
      const hook = scriptTemplates[0].templates[Math.floor(Math.random() * scriptTemplates[0].templates.length)]
      const story = scriptTemplates[1].templates[Math.floor(Math.random() * scriptTemplates[1].templates.length)]
      const cta = scriptTemplates[2].templates[Math.floor(Math.random() * scriptTemplates[2].templates.length)]

      const customizedStory = story
        .replace('{topic}', niche.toLowerCase())
        .replace('{money}', '$' + (Math.floor(Math.random() * 5) + 1) + '00')
        .replace('{result}', getResult(niche))
        .replace('{Number}', String(Math.floor(Math.random() * 5) + 3))

      const customizedCTA = cta.replace('{topic}', niche.toLowerCase())

      const fullScript = `🎬 VIRAL REEL SCRIPT (30 seconds)\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n📍 HOOK (0-3 sec):\n${hook}\n\n📖 STORY (4-25 sec):\n${customizedStory}\n\n✨ Details:\n${generateDetails(niche, tone)}\n\n🎯 CALL-TO-ACTION (26-30 sec):\n${customizedCTA}\n\n━━━━━━━━━━━━━━━━━━━━━━━━━━━\n💡 PRO TIPS:\n• Use trending audio\n• Add captions for accessibility\n• Film in vertical format (9:16)\n• Eye contact with camera\n• ${getToneTip(tone)}`

      setScript(fullScript)
      setLoading(false)
    }, 1500)
  }

  const getResult = (niche: string): string => {
    const results: { [key: string]: string } = {
      'Fitness': '10K followers',
      'Money Making': '$10K/month',
      'Self Improvement': 'complete transformation',
      'Tech': '1M views',
      'Fashion': 'brand deals',
      'Travel': '50 countries',
      'Food': 'restaurant partnerships',
      'Gaming': 'pro level',
      'Beauty': 'glowing skin',
      'Motivation': 'life changed',
      'Business': '$100K revenue',
      'Productivity': '10x output',
      'Mindset': 'breakthrough',
      'Health': 'best shape ever',
      'Relationships': 'dream life'
    }
    return results[niche] || 'amazing results'
  }

  const generateDetails = (niche: string, tone: string): string => {
    const details = [
      `Most people get ${niche.toLowerCase()} completely wrong`,
      `This simple trick 10x'd my results`,
      `The industry doesn't want you to know this`,
      `It took me months to figure this out`,
      `Now I can't imagine doing it any other way`,
      `This one change made all the difference`,
      `Everyone was shocked when I showed them`
    ]
    return details[Math.floor(Math.random() * details.length)]
  }

  const getToneTip = (tone: string): string => {
    const tips: { [key: string]: string } = {
      'Energetic': 'Keep energy high throughout',
      'Mysterious': 'Build suspense until the end',
      'Educational': 'Focus on value delivery',
      'Entertaining': 'Add humor or surprise elements',
      'Inspiring': 'End with emotional impact',
      'Controversial': 'Challenge common beliefs',
      'Storytelling': 'Create emotional connection',
      'Direct': 'Get straight to the point'
    }
    return tips[tone] || 'Stay authentic'
  }

  const copyToClipboard = () => {
    navigator.clipboard.writeText(script)
    alert('Script copied to clipboard!')
  }

  return (
    <div className="min-h-screen py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-3">
            🎥 Viral Reel Script Generator
          </h1>
          <p className="text-xl text-purple-100">
            Generate AI-powered scripts for 30-second Instagram Reels
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 mb-6">
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Select Your Niche 🎯
              </label>
              <select
                value={niche}
                onChange={(e) => setNiche(e.target.value)}
                className="w-full p-3 border-2 border-purple-300 rounded-lg focus:outline-none focus:border-purple-500 transition"
              >
                <option value="">Choose a niche...</option>
                {niches.map((n) => (
                  <option key={n} value={n}>{n}</option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-gray-700 font-semibold mb-2">
                Choose Your Tone 🎨
              </label>
              <select
                value={tone}
                onChange={(e) => setTone(e.target.value)}
                className="w-full p-3 border-2 border-purple-300 rounded-lg focus:outline-none focus:border-purple-500 transition"
              >
                <option value="">Choose a tone...</option>
                {tones.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
          </div>

          <button
            onClick={generateScript}
            disabled={loading}
            className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-4 px-8 rounded-lg hover:from-purple-700 hover:to-pink-700 transform hover:scale-105 transition duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? '✨ Generating Your Viral Script...' : '🚀 Generate Viral Script'}
          </button>
        </div>

        {script && (
          <div className="bg-white rounded-2xl shadow-2xl p-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold text-gray-800">Your Script 📝</h2>
              <button
                onClick={copyToClipboard}
                className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition font-semibold"
              >
                📋 Copy Script
              </button>
            </div>
            <pre className="bg-gray-50 p-6 rounded-lg text-gray-800 whitespace-pre-wrap font-mono text-sm border-2 border-purple-200">
              {script}
            </pre>
          </div>
        )}

        <div className="mt-8 text-center text-white">
          <p className="text-sm opacity-90">
            💡 Tip: Generate multiple scripts and pick the best one for your content
          </p>
        </div>
      </div>
    </div>
  )
}
