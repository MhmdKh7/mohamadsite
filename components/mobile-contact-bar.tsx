import { Phone, MessageCircle } from 'lucide-react'

const MOBILE = '09122366923'
const WHATSAPP = 'https://wa.me/989122366923'

export function MobileContactBar() {
  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 pb-[env(safe-area-inset-bottom)]">
      <div className="grid grid-cols-2 gap-2 p-2">
        <a
          href={`tel:${MOBILE}`}
          aria-label={`تماس با ${MOBILE}`}
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-accent text-accent-foreground font-bold text-sm"
        >
          <Phone className="h-5 w-5" aria-hidden="true" />
          تماس
        </a>
        <a
          href={WHATSAPP}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="چت واتساپ"
          className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-green-600 text-white font-bold text-sm hover:bg-green-700"
        >
          <MessageCircle className="h-5 w-5" aria-hidden="true" />
          واتساپ
        </a>
      </div>
    </div>
  )
}
