import React from 'react'

type InsightRollProps = {
  insights: string[]
}

const InsightRoll = ({ insights }: InsightRollProps) => {
  return (
    <div className="w-full overflow-hidden whitespace-nowrap bg-accent text-light dark:bg-accentDark dark:text-dark">
      <div className="animate-roll  flex w-full items-center justify-center py-2 text-sm font-semibold capitalize tracking-wider sm:py-3 sm:text-base">
        {insights.map((text) => (
          <div key={text}>
            {text} <span className="px-4">|</span>{' '}
          </div>
        ))}
      </div>
    </div>
  )
}

export default InsightRoll
