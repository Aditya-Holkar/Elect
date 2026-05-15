import ContentLoader from 'react-content-loader'

export function Skeleton({ className = '' }) {
  return (
    <div className={`rounded-lg bg-surface-alt ${className}`} />
  )
}

export function CardSkeleton() {
  return (
    <ContentLoader
      speed={2}
      width={400}
      height={200}
      viewBox="0 0 400 200"
      backgroundColor="#e2e8f0"
      foregroundColor="#cbd5e1"
    >
      <circle cx="32" cy="32" r="24" />
      <rect x="72" y="20" rx="4" ry="4" width="200" height="16" />
      <rect x="16" y="72" rx="4" ry="4" width="360" height="12" />
      <rect x="16" y="96" rx="4" ry="4" width="320" height="12" />
      <rect x="16" y="120" rx="4" ry="4" width="280" height="12" />
    </ContentLoader>
  )
}

export function PageSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-20 space-y-12">
      <div className="text-center space-y-4">
        <ContentLoader
          speed={2}
          width={400}
          height={60}
          viewBox="0 0 400 60"
          backgroundColor="#e2e8f0"
          foregroundColor="#cbd5e1"
          className="mx-auto"
        >
          <rect x="40" y="0" rx="4" ry="4" width="320" height="24" />
          <rect x="80" y="36" rx="4" ry="4" width="240" height="16" />
        </ContentLoader>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[1, 2, 3, 4].map(i => <CardSkeleton key={i} />)}
      </div>
    </div>
  )
}

export function BlogSkeleton() {
  return (
    <ContentLoader
      speed={2}
      width={800}
      height={300}
      viewBox="0 0 800 300"
      backgroundColor="#e2e8f0"
      foregroundColor="#cbd5e1"
    >
      <rect x="0" y="0" rx="8" ry="8" width="800" height="180" />
      <rect x="0" y="200" rx="4" ry="4" width="600" height="24" />
      <rect x="0" y="240" rx="4" ry="4" width="400" height="16" />
      <rect x="0" y="270" rx="4" ry="4" width="500" height="16" />
    </ContentLoader>
  )
}

export function TextSkeleton({ lines = 3 }) {
  return (
    <div className="space-y-3">
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton key={i} className={`h-4 ${i === lines - 1 ? 'w-3/4' : 'w-full'}`} />
      ))}
    </div>
  )
}
