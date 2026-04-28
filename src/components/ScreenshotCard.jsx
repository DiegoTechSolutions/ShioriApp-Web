export default function ScreenshotCard({ screenshot, onClick }) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer overflow-hidden rounded-2xl bg-gradient-to-br from-md-bg/50 to-md-surface-variant/30 border border-md-surface-variant/30 hover:border-primary-500/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/15"
    >
      {/* Placeholder Image */}
      <div className="aspect-video bg-gradient-to-br from-primary-500/15 to-primary-600/10 flex items-center justify-center overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/10 to-transparent" />
        <div className="text-center text-md-text-variant z-10">
          <div className="text-5xl mb-3">📱</div>
          <p className="text-sm font-medium">{screenshot.title}</p>
        </div>

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white font-semibold">Ver Imagen</span>
        </div>
      </div>

      {/* Info */}
      <div className="p-6">
        <h3 className="font-bold text-md-text group-hover:text-primary-400 transition-colors mb-2 font-display">
          {screenshot.title}
        </h3>
        <p className="text-sm text-md-text-variant">{screenshot.description}</p>
      </div>
    </div>
  )
}
