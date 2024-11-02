import { useRouter } from 'next/navigation'

// Define the routes as a const to ensure type safety
export const routes = {
  home: '/',
  about: '/about',
  projects: '/projects',
  experience: '/experience',
  contact: '/contact',
} as const

// Create a type from the routes object
export type RoutePath = typeof routes[keyof typeof routes]

// Type for the navigation item
export interface NavItem {
  name: string
  path: RoutePath
}

// Navigation items
export const navItems: NavItem[] = [
  { name: 'Home', path: routes.home },
  { name: 'About', path: routes.about },
  { name: 'Projects', path: routes.projects },
  { name: 'Experience', path: routes.experience },
  { name: 'Contact', path: routes.contact },
]

// Custom hook for type-safe navigation
export function useTypeSafeNavigation() {
  const router = useRouter()

  const navigateTo = (path: RoutePath) => {
    router.push(path)
  }

  return navigateTo
}

// Function to check if a given path is the current route
export function isCurrentRoute(currentPath: string, routePath: RoutePath): boolean {
  return currentPath === routePath
}