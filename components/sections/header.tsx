"use client"

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'
import type { SiteData } from '@/lib/content'

interface HeaderProps {
  navigation: SiteData['navigation']
}

export function Header({ navigation }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">{navigation.logo_text}</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button asChild>
            {navigation.cta.href.startsWith('http') ? (
              <a href={navigation.cta.href} target="_blank" rel="noopener noreferrer">
                {navigation.cta.label}
              </a>
            ) : (
              <Link href={navigation.cta.href}>{navigation.cta.label}</Link>
            )}
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="メニューを開く"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden border-t bg-background">
          <nav className="container py-4 space-y-4">
            {navigation.links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button asChild className="w-full">
              {navigation.cta.href.startsWith('http') ? (
                <a href={navigation.cta.href} target="_blank" rel="noopener noreferrer">
                  {navigation.cta.label}
                </a>
              ) : (
                <Link href={navigation.cta.href}>{navigation.cta.label}</Link>
              )}
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}


