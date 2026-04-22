export default function ScreenshotCard({ screenshot, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer overflow-hidden rounded-xl bg-gradient-to-br from-md-surface to-md-surface-variant border border-md-surface-variant/20 hover:border-primary-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/20"
    >
      {/* Placeholder Image */}
      <div className="aspect-video bg-gradient-to-br from-primary-500/10 to-primary-600/10 flex items-center justify-center overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent" />
        <div className="text-center text-md-text-variant">
          <div className="text-4xl mb-2">📱</div>
          <p className="text-sm">{screenshot.title}</p>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white font-semibold">Ver Imagen</span>
        </div>
      </div>

      {/* Info */}
      <div className="p-4">
        <h3 className="font-semibold text-md-text group-hover:text-primary-400 transition-colors mb-1">
          {screenshot.title}
        </h3>
        <p className="text-sm text-md-text-variant">{screenshot.description}</p>
      </div>
    </div>
  )
}
