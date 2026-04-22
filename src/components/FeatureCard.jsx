import * as Icons from 'lucide-react'

export default function FeatureCard({ feature }) {
  const IconComponent = Icons[feature.icon]

  return (
    <div className="group p-6 rounded-xl bg-md-surface border border-md-surface-variant/20 hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/10">
      {/* Icon */}
      <div className="w-12 h-12 mb-4 bg-gradient-to-br from-primary-500/20 to-primary-600/20 rounded-lg flex items-center justify-center group-hover:from-primary-500/30 group-hover:to-primary-600/30 transition-all duration-300">
        {IconComponent && <IconComponent className="text-primary-400" size={24} />}
      </div>

      {/* Content */}
      <h3 className="text-lg font-semibold text-md-text mb-2 group-hover:text-primary-400 transition-colors">
        {feature.title}
      </h3>
      <p className="text-md-text-variant text-sm leading-relaxed">
        {feature.description}
      </p>

      {/* Accent Line */}
      <div className="mt-4 h-1 w-0 bg-primary-500 group-hover:w-8 transition-all duration-300" />
    </div>
  )
}
