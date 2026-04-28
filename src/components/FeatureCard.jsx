import * as Icons from 'lucide-react'

export default function FeatureCard({ feature }) {
  const IconComponent = Icons[feature.icon]

  return (
    <div className="group p-8 rounded-2xl bg-md-bg/50 hover:bg-md-surface/60 border border-md-surface-variant/30 hover:border-primary-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10">
      {/* Icon */}
      <div className="w-14 h-14 mb-5 bg-primary-500/15 rounded-lg flex items-center justify-center group-hover:bg-primary-500/25 transition-all duration-300">
        {IconComponent && <IconComponent className="text-primary-400" size={28} />}
      </div>

      {/* Content */}
      <h3 className="text-xl font-bold text-md-text mb-3 group-hover:text-primary-400 transition-colors font-display">
        {feature.title}
      </h3>
      <p className="text-md-text-variant text-sm leading-relaxed mb-4">
        {feature.description}
      </p>

      {/* Accent Line */}
      <div className="h-0.5 w-0 bg-gradient-to-r from-primary-500 to-primary-600 group-hover:w-8 transition-all duration-300" />
    </div>
  )
}
