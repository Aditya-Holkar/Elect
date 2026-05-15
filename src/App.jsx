import { lazy, Suspense } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Layout from './components/Layout'
import { PageSkeleton } from './components/ui/Skeleton'
import Home from './pages/Home'
const Services = lazy(() => import('./pages/Services'))
const ServiceDetail = lazy(() => import('./pages/ServiceDetail'))
const Projects = lazy(() => import('./pages/Projects'))
const ProjectDetail = lazy(() => import('./pages/ProjectDetail'))
const About = lazy(() => import('./pages/About'))
const Testimonials = lazy(() => import('./pages/Testimonials'))
const Faq = lazy(() => import('./pages/Faq'))
const Blog = lazy(() => import('./pages/Blog'))
const BlogPost = lazy(() => import('./pages/BlogPost'))
const Contact = lazy(() => import('./pages/Contact'))
const Quote = lazy(() => import('./pages/Quote'))
const Careers = lazy(() => import('./pages/Careers'))
const ServiceAreas = lazy(() => import('./pages/ServiceAreas'))
const Privacy = lazy(() => import('./pages/Privacy'))
const NotFound = lazy(() => import('./pages/NotFound'))

function App () {
  const location = useLocation()

  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Suspense fallback={<PageSkeleton />}>
          <Routes location={location} key={location.pathname}>
            <Route path='/' element={<Home />} />
            <Route path='/services' element={<Services />} />
            <Route path='/services/:slug' element={<ServiceDetail />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/projects/:slug' element={<ProjectDetail />} />
            <Route path='/about' element={<About />} />
            <Route path='/testimonials' element={<Testimonials />} />
            <Route path='/faq' element={<Faq />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/blog/:slug' element={<BlogPost />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/quote' element={<Quote />} />
            <Route path='/careers' element={<Careers />} />
            <Route path='/service-areas' element={<ServiceAreas />} />
            <Route path='/privacy' element={<Privacy />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </Suspense>
      </AnimatePresence>
    </Layout>
  )
}

export default App
